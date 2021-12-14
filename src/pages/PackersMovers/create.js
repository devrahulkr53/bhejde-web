import React from 'react'
import { useForm } from 'react-hook-form';
import firebase from 'firebase';

import 'rsuite/dist/rsuite.min.css'
import { Uploader } from 'rsuite';
import { useDispatch } from 'react-redux';

const plan = [
    {
        name:'Free',
        price:0,
        features:[]
    },
    {
        name:'Basic Plan',
        price:4999,
        features:[
            "INDIRECT CONTACT",
            "GOOGLE ADVERTISING",
            "LISTING ON WEBSITE",
            "5 PHOTOS",
        ]
    },
    {
        name:'Premium Plan',
        price:6999,
        features:[
            "DIRECT CONTACT ",
            "TOP ON GOOGLE SEARCH",
            "TOP ON WEBSITE SEARCHS",
            "SMS MARKETING",
            "CUSTOMER DETAILS VIA SMS",
            "10 PHTOS OF VEHICLES AND YOUR BUSINESS",
            "PROFILE MANAGEMENT AGENT",
        ]
    }
]


export default function RegisterPackersMovers() {

    var db = firebase.firestore();
    const storage = firebase.storage().ref();
    const dispatch = useDispatch()

    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitLoading,setSubmitLoading] = React.useState(null)
    const [selectedPlan,setSelectedPlan] = React.useState(2)
    const [businessImages,setBusinessImages] = React.useState([])
    const [isRegistered,setRegistered] = React.useState(false)


    const onSubmit = (data) => {
        setSubmitLoading(true)
        var x = {
            ...data,
            plan:selectedPlan,
            businessImages:businessImages.map(e=>e.val)
        }
        db.collection("packers-movers").add(x)
        .then((docRef) => {
            dispatch({type:"setAlert",payloads:{type:'success',msg:'You are now a registered packers and movers'}})
            setSubmitLoading(false)
            setRegistered(true)
        })
        .catch((error) => {
            dispatch({type:"setAlert",payloads:{type:'danger',msg:error.message}})
            setSubmitLoading(false)
        }); 
    }

    const uploadFiles = async (file) => {
        return new Promise(function(resolve,reject){
            
            var uploadTask = storage.child('packers-movers/'+ new Date().toISOString() + file.name).put(file);
            
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

    const deleteFile = (x) => {
        // Create a reference to the file to delete
        var file = businessImages.filter(e=>e.key === x)[0].val
        if(!file)return;
        var desertRef = firebase.storage().refFromURL(file)

        // Delete the file
        desertRef.delete().then(() => {
        // File deleted successfully
            console.log('file deleted')
        }).catch((error) => {
        // Uh-oh, an error occurred!
        });
    }

    return (
        <div className="container-fluid widget my-5">
            <div className="d-flex align-items-center">
                <div className="col-md-8 d-none d-md-block">
                    <section className="pricing-section p-0">
                        <div className="auto-container">
                            <div className="row m-0">
                                <div className={`col-md-6 pricing-block ${selectedPlan === 1 && 'style-two'}`} onClick={e=>setSelectedPlan(1)}>
                                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" style={{backgroundImage: selectedPlan === 1 ? 'url(assets/images/resource/image-3.jpg)':''}}>
                                        <div className="category-wrapper"><div className="category">{plan[1].name}</div></div>
                                        <div className="price">Rs. {plan[1].price}</div>
                                        <div className="time">Per Year</div>
                                        <ul className="content px-0">
                                            {plan[1].features.map((item,key)=>(
                                                <li key={key}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={`col-md-6 pricing-block ${selectedPlan === 2 && 'style-two'}`} onClick={e=>setSelectedPlan(2)}>
                                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" style={{backgroundImage: selectedPlan === 2 ? 'url(assets/images/resource/image-3.jpg)':''}}>
                                        <div className="category-wrapper"><div className="category">{plan[2].name}</div></div>
                                        <div className="price">Rs. {plan[2].price}</div>
                                        <div className="time">Per Year</div>
                                        <ul className="content px-0">
                                            {plan[2].features.map((item,key)=>(
                                                <li key={key}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-4 widget">
                    {isRegistered ? <div className="text-center my-3">
                        <img src="/icons/success.png" alt="Success" width="120px" />
                        <div className="display-6">Congratulations !</div>
                        <div>You are now registered and verification is in progress</div>
                    </div>:<form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="widget_title">Register</h2>
                        <div className="btn-group">
                            <button type="button" onClick={e=>setSelectedPlan(1)} className={`btn btn-${selectedPlan === 1 ? 'danger':'outline-primary'}`}>Basic</button>
                            <button type="button" onClick={e=>setSelectedPlan(2)} className={`btn btn-${selectedPlan === 2 ? 'danger':'outline-primary'}`}>Premium</button>
                            <button type="button" onClick={e=>setSelectedPlan(0)} className={`btn btn-${selectedPlan === 0 ? 'danger':'outline-primary'}`}>Free Trial</button>
                        </div> 
                        <div className="input-group my-2">
                            <input type="text" className={`form-control p-3`} id="name" {...register("name",{required:true})} placeholder="Driver name" />
                            {errors.name && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        <div className="input-group my-2">
                            <input type="text" className={`form-control p-3`} id="businessName" {...register("businessName",{required:true})} placeholder="Business Name" />
                            {errors.businessName && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        <div className="input-group my-2">
                            <div className="input-group-text">+91</div>
                            <input type="text" className={`form-control`} id="phone" {...register("phone",{required:true,minLength:10,maxLength:10})} placeholder="Phone number" />
                            {errors.phone && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        <div className="input-group my-2">
                            <div className="input-group-text">+91</div>
                            <input type="text" className={`form-control`} id="alternatePhone" {...register("alternatePhone",{required:true,minLength:10,maxLength:10})} placeholder="Alternative phone number" />
                            {errors.alternatePhone && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        <div className="input-group my-2">
                            <select id="cityLocation" className={`form-select`} {...register("cityLocation",{required:true})}>
                                <option value="">Select City location</option>
                                <option value="jamshedpur">Jamshedpur</option>
                                <option value="ranchi">Ranchi</option>
                                <option value="bokaro">Bokaro</option>
                                <option value="dhanbad">Dhanbad</option>
                            </select>
                            {errors.cityLocation && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        <div className="input-group my-2">
                            <select id="businessLocation" className={`form-select`} {...register("businessLocation",{required:true})}>
                                <option value="">Select Business location</option>
                                <option value="jamshedpur">Jamshedpur</option>
                                <option value="ranchi">Ranchi</option>
                                <option value="bokaro">Bokaro</option>
                                <option value="dhanbad">Dhanbad</option>
                            </select>
                            {errors.businessLocation && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        <div className="input-group my-2">
                            <textarea name="businessDesc" cols="30" rows="4" className="form-control my-2" {...register("businessDesc",{required:false,maxLength:50})} placeholder="Write something about your business"></textarea>
                            {errors.businessDesc && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                        </div>
                        

                        <Uploader
                            onRemove={e=>deleteFile(e.fileKey)}
                            onUpload={e=>uploadFiles(e.blobFile).then(res=>{
                                setBusinessImages(img => [...img ,{key:e.fileKey,val:res}])
                            })}
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-text" draggable multiple>
                        <div style={{lineHeight: '70px'}}>Click or Drag your business images</div>
                        </Uploader>

                        {selectedPlan != 0 ? <div className="text-start my-3">
                            <button type="button" disabled={submitLoading} className="theme-btn btn-style-one w-100">
                                <span>
                                    {submitLoading === null ? <><i className="flaticon-up-arrow"></i>Pay Now ( Rs . {plan[selectedPlan].price}) </>:submitLoading === true ? <div className="d-flex align-items-center"><div className="spinner-border text-dark"></div><div className="mx-2">Loading ...</div></div>:''}
                                </span>
                            </button>
                        </div>:<div className="text-start my-3">
                            <button type="submit" disabled={submitLoading} className="theme-btn btn-style-one w-100">
                                <span>
                                    {submitLoading === null ? <><i className="flaticon-up-arrow"></i>Submit</>:submitLoading === true ? <div className="d-flex align-items-center"><div className="spinner-border text-dark"></div><div className="mx-2">Loading ...</div></div>:''}
                                </span>
                            </button>
                        </div>}
                        
                        
                    </form>}
                    
                </div>
            </div>
        </div>
    )
}
