import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {apiAuth, apiUrl} from '../globalVar';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import firebase from 'firebase';
import { useDispatch } from 'react-redux'
import { Redirect } from "react-router-dom"




// Create the file metadata
/** @type {any} */
const metadata = {
    contentType: 'image/jpeg'
};

export default function Driver() {
    // Create a root reference
    // const storage = getStorage(app);
    var db = firebase.firestore();
    const storage = firebase.storage().ref();
    const dispatch = useDispatch()
    // const auth = getAuth(); 
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitLoading,setSubmitLoading] = React.useState(null)
    const [isRegistered,setRegistered] = React.useState(false)
    const countryCode = '+91';
    const [data,setData] = React.useState(null);
    const [vehicles,setVehicles] = React.useState([])
    const [aadharCard,setAadharCard] = React.useState(null)
    const [driverLicense,setDriverLicense] = React.useState(null)
    const [vehicleRC,setVehicleRC] = React.useState(null)
    const [vehicleInsurance,setVehicleInsurance] = React.useState(null)
    const [otp,setOtp] = React.useState(null);
    const [confirmationResult,setConfirmationResult] = React.useState(null)
    
    useEffect(()=>{
        db.collection("vehicles").onSnapshot((querySnapshot) => {
        var data = []
        querySnapshot.forEach((doc) => {
            doc.data() && data.push({id:doc.id,...doc.data()}) 
        });
        setVehicles(data)
        });  
    },[])

    useEffect(()=>{
        if(aadharCard && vehicleRC && vehicleInsurance && driverLicense){
            readyToSubmit();
        }
    },[aadharCard,driverLicense,vehicleInsurance,vehicleRC]) 
    
    const onSubmit = data => {
        setSubmitLoading(true)
        if(submitLoading) return;
        var phone = countryCode+data.phone
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          }); 
          console.log('dsf')
        const appVerifier = window.recaptchaVerifier;
        db.collection("users").where("phone","==",data.phone)
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.docs.length === 0){
                firebase.auth().signInWithPhoneNumber(phone, appVerifier)
                    .then((res) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    setData(data)
                    dispatch({type:"setAlert",payloads:{type:'success',msg:'OTP sent.'}})
                    setConfirmationResult(res) 
                    setSubmitLoading(null)
                    // ...
                }).catch((err) => {
                    dispatch({type:"setAlert",payloads:{type:'danger',msg:err.message}})
                    setSubmitLoading(null)
                }); 

            }else{
                dispatch({type:"setAlert",payloads:{type:'warning',msg:'You are already registered driver'}})
                setSubmitLoading(null)

            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
     
    }
    
    const verifyOTP = () => {
        setSubmitLoading(true)
        confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            setData({...data,user})
            uploadFiles(data.aadharCard[0]).then(res=>{
                setAadharCard(res)
            }).catch(err=>console.log(err.message))
            uploadFiles(data.vehicleRC[0]).then(res=>{
                setVehicleRC(res)
            }).catch(err=>console.log(err.message))
            uploadFiles(data.driverLicense[0]).then(res=>{
                setDriverLicense(res)
            }).catch(err=>console.log(err.message))
            uploadFiles(data.vehicleInsurancePaper[0]).then(res=>{
                setVehicleInsurance(res)
            }).catch(err=>console.log(err.message))
            // ...
        }).catch(err=>{
            dispatch({type:"setAlert",payloads:{type:'danger',msg:'Invalid OTP'}})
            setSubmitLoading(null)
        });
    }
    
    const readyToSubmit = () => {
        var x = {
            name:data.name,
            phone:data.phone,
            role:3,
            aadharCard,vehicleInsurance,vehicleRC,countryCode,
            uid:data.user.uid,
            token:data.user.refreshToken,
            verified:false
        }
        try{
            db.collection("users").add(x)
            .then((docRef) => {
                // dispatch({type:"setAlert",payloads:{type:'success',msg:'You are now registered and verification is in progress'}})
                setSubmitLoading(null)
                setRegistered(true)
            })
            .catch((error) => {
                dispatch({type:"setAlert",payloads:{type:'danger',msg:error.message}})
            }); 
        }catch(err){
            console.log(err)
        }
        
    }


     

 
    const uploadFiles = async (file) => {
        return new Promise(function(resolve,reject){
            
            var uploadTask = storage.child('users/'+ new Date().toISOString() + file.name).put(file);
            
            uploadTask.on('state_changed', 
            (snapshot) => { 
            }, 
            (error) => {
                reject(error.message)
                // Handle unsuccessful uploads
              }, 
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    resolve(downloadURL)
                });
              }
            );
 

        })
    }


  

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-7 d-none d-md-block">
                <div style={{opacity:0.7}}> 
                    <svg width="303" height="185" viewBox="0 0 303 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M161.71 0V14.5301H167.276V71.0729H174.588V53.6601H178.439V49.4541L186.862 53.6601H188.926V43.1997L199.004 28.0385L209.082 43.1997V78.772H213.813V85.6847H220.794V57.472H226.579L226.338 45.766H233.033V42.4133H239.817L240.861 22.1391L241.904 42.4133H243.209V45.766H244.969L244.324 77.1158H245.574V63.2849L259.599 53.6601V71.0729H273.626V57.472H282.284V49.4541L297.115 61.6222V49.4541L317 65.7689V185H302.169H297.115H282.916H282.284H273.626H259.599H245.574H242.667H230.085H228.641H221.605H220.794H209.082H201.449H188.926H174.588H167.276H154.884H149.586H137.16H133.791H122.38H116.167H106.13H102.494H97.3182H88.5065H86.2441H77.4325H72.6773H68.6203H52.7926H46.2349H37.7058H29.1756H22.6089H20.6465H11.1198H8.58331H0V68.7999H6.75449L6.28098 45.766H20.6465V12.4235H29.1756V19.5111H37.7058V26.0002H46.2349V59.4552H52.7926V43.9007H55.1276V42.1852H70.3418V43.9007H72.6773V76.3348H77.4325V34.6503H79.7685V32.9348H94.9821V34.6503H97.3182V58.6541H102.494V43.9007H104.83V42.1852H120.043V43.9007H122.38V49.4541L127.262 55.5639V65.8074H133.791V59.4552H137.16V43.9007H149.586V34.6918L154.884 29.4393V14.5301H160.451V0H161.71Z" fill="#FFC815"/>
                    </svg>
                    <div style={{marginTop:"-80px"}}>
                        <svg width="192" height="141" viewBox="0 0 192 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M94.0558 0H94.8184V11.0743H98.1902V22.4376L101.399 26.4407V33.4594H108.925V45.3145H110.966V50.1559H114.92V42.3487L117.877 37.692V33.4594H119.292V32.152H128.507V33.4594H129.921V44.7039H133.057V26.4091H134.471V25.1017H143.686V26.4091H145.101V58.1795H147.981V33.4594H149.396V32.152H158.61V33.4594H160.025V45.3145H163.997V19.8163H169.162V14.8706H174.329V9.46874H179.495V34.8811H188.196L187.909 52.4366H192V141H0V50.1266L12.044 37.692V46.9661L21.0269 37.692V43.803H26.2709V54.1691H34.7662V40.8977L43.2613 48.2334V58.7747H44.0181L43.6274 34.8811H44.6937V32.3259H45.484L46.1159 16.8736L46.7481 32.3259H50.8567V34.8811H54.9117L54.7658 43.803H58.2698V65.3057H62.4979V60.037H65.3634V32.9252L71.4674 21.3699L77.5718 32.9252V40.8977H78.8216L83.9235 37.692V40.8977H86.2558V54.1691H90.6843V11.0743H94.0558V0Z" fill="#FFE56B"/>
                        </svg>
                        <svg width="183" height="141" viewBox="0 0 183 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M121.489 0V11.0743H117.134V54.1691H111.414V40.8977H108.401V37.692L101.811 40.8977H100.197V32.9252L92.3121 21.3699L84.4277 32.9252V60.037H80.7265V65.3057H75.2652V43.803H70.7391L70.9276 34.8811H65.6899V32.3259H60.383L59.5663 16.8736L58.7501 32.3259H57.7293V34.8811H56.3521L56.8567 58.7747H55.8791V48.2334L44.9064 40.8977V54.1691H33.9332V43.803H27.1598V37.692L15.5569 46.9661V37.692L0 50.1266V141H11.6025H15.5569H26.6654H27.1598H33.9332H44.9064H55.8791H58.1533H67.997H69.126H74.6305H75.2652H84.4277H90.3997H100.197H111.414H117.134H126.829H130.974H140.695H143.331H152.258H157.119H164.971H167.815H171.865H178.758H180.528H187.422H191.142H194.316H206.699H211.829H218.501H225.175H230.312H231.848H239.301H241.285H248V52.4366H242.716L243.086 34.8811H231.848V9.46874H225.175V14.8706H218.501V19.8163H211.829V45.3145H206.699V33.4594H204.872V32.152H192.969V33.4594H191.142V58.1795H187.422V26.4091H185.594V25.1017H173.692V26.4091H171.865V44.7039H167.815V33.4594H165.988V32.152H154.086V33.4594H152.258V37.692L148.439 42.3487V50.1559H143.331V45.3145H140.695V33.4594H130.974V26.4407L126.829 22.4376V11.0743H122.474V0H121.489Z" fill="#FFBC00"/>
                        </svg>
                    </div>
                </div>
                <h1 className="">Make Money. Earn Respect. Secure Your Future.</h1>
                <p>Apply now to become bhejde driver. Start earning in 24 hours!</p>
                </div>
                <div className="col-md-5">
                    {isRegistered ? <div className="text-center my-3">
                        <img src="/icons/success.png" alt="Success" width="120px" />
                        <div className="display-6">Congratulations !</div>
                        <div>You are now registered and verification is in progress</div>
                    </div>:<>
                        <form onSubmit={handleSubmit(onSubmit)} className="my-4 w-100">
                            <div className="display-6">Register your vehicle</div>
                            {/* <small>Register your vehicle and become bhejde driver.</small> */}
                            {/* <small> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</small> */}
                            <div className="my-4"></div>
                            <div id="sign-in-button"></div>


                            {!confirmationResult ? <>
                                {/* <small className="text-secondary">Personal Information</small> */}
                                <div className="input-group my-2">
                                    <input type="text" className={`form-control`} id="name" {...register("name",{required:true})} placeholder="Driver name" />
                                    {errors.name && <img src="./icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                                </div>
                                <div className="input-group my-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">+91</div>
                                    </div>
                                    <input type="number" className={`form-control`} id="phone" {...register("phone",{required:true,minLength:10,maxLength:10})} placeholder="Phone number" />
                                    {errors.phone && <img src="./icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                                </div>
                                <select className={`form-select mb-2 ${errors.vehicleType && 'border border-danger'}`} id="vehicleType" {...register("vehicleType",{required:true})}>
                                    <option value="">Select vehicle type</option>
                                    {vehicles.map((val,key)=>(<option key={key} value={val.id}>{val.vehicleName}</option>))}
                                </select>
                                <small className="text-secondary">Aadhar Card</small>
                                <label htmlFor="aadharCard" className="d-flex align-items-center border border-secondary rounded pe-1 mb-1">
                                    {/* <div>Aadhar Card</div> */}
                                    <input type="file" className={`form-control`} id="aadharCard" {...register("aadharCard",{required:true})} placeholder="Aadhar Card" />
                                    <img src="/icons/aadharcard.png" alt="Aadhar Card" width="60px" />
                                    {errors.aadharCard && <img src="./icons/danger.png" alt="error" width="20px" height="20px" className="ms-auto" />}
                                </label>
                                <small className="text-secondary">Driver License</small>
                                <label htmlFor="driverLicense" className="d-flex align-items-center border border-secondary rounded pe-1 mb-1">
                                    {/* <div>Driver License</div> */}
                                    <input type="file" className={`form-control`} id="driverLicense" {...register("driverLicense",{required:true})} placeholder="Vehicle Registration Number" />
                                    <img src="/icons/rc.png" alt="" width="60px" className="" /> 
                                    {errors.driverLicense && <img src="./icons/danger.png" alt="error" width="20px" height="20px" className="ms-auto" />}
                                </label>
                                <small className="text-secondary">Vehicle Registration Certificate</small>
                                <label htmlFor="vehicleRC" className="d-flex align-items-center border border-secondary rounded pe-1 mb-1">
                                    {/* <div>Vehicle Registration Certificate</div> */}
                                    <input type="file" className={`form-control`} id="vehicleRC" {...register("vehicleRC",{required:true})} placeholder="Vehicle Registration Number" />
                                    <img src="/icons/rc.png" alt="" width="60px" className="" /> 
                                    {errors.vehicleRC && <img src="./icons/danger.png" alt="error" width="20px" height="20px" className="ms-auto" />}
                                </label>
                                <small className="text-secondary">Vehicle Insurance</small>
                                <label htmlFor="vehicleInsurancePaper" className="d-flex align-items-center border border-secondary rounded pe-1 mb-1">
                                    {/* <div>Vehicle Insurance paper</div> */}
                                    <input type="file" className={`form-control`} id="vehicleInsurancePaper" {...register("vehicleInsurancePaper",{required:true})} placeholder="Vehicle Registration Number" />
                                    <img src="/icons/insurance.png" alt="" width="60px" />
                                    {errors.vehicleInsurancePaper && <img src="./icons/danger.png" alt="error" width="20px" height="20px" className="ms-auto" />}
                                </label>
                                
                                <div className="text-start my-3">
                                    <button type="submit" disabled={submitLoading===true} className={`btn px-5 ${submitLoading === false ? 'btn-secondary':'btn-warning'}`}>
                                        {submitLoading === null ? 'Submit':submitLoading === true ? <div className="d-flex align-items-center"><div className="spinner-border text-dark"></div><div className="mx-2">Loading ...</div></div>:'OTP sent'}
                                    </button>
                                </div>
                            
                            </>:<>
                                <img src="./icons/otp.png" className="w-50" alt="OTP" />
                                <input type="number" id="otp" onChange={e=>setOtp(e.target.value)} className="form-control my-2" placeholder="Enter otp" />
                                <button type="button" disabled={submitLoading===true} className={`btn px-5 btn-warning`} onClick={verifyOTP}>
                                    {submitLoading === null ? 'Verify OTP':submitLoading === true ? <div className="d-flex align-items-center"><div className="spinner-border text-dark"></div><div className="mx-2">Loading ...</div></div>:'Verified'}
                                </button>
                            </>}


                        </form>
                    </>}

                </div>
            </div>
        </div>
    )
}