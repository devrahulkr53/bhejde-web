import React, {useEffect} from 'react' 
import firebase from 'firebase';
import { useForm } from 'react-hook-form';

export default function ShowPackersMovers() {
 
    var db = firebase.firestore();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isLoading,setLoading] = React.useState(false)
    const [packers,setPackers] = React.useState([])
    const [selectedPackers,setSelectedPackers] = React.useState(null)
    const [search,setSearch] = React.useState("")
    const [isContactSubmited,setContactSubmited] = React.useState(false)
  
    useEffect(() => {
        fetchPackers();

    }, [])
    
    const onSubmit = data => {
        db.collection("lead")
        .where("phoneNumber","==",data.phoneNumber)
        .get().then(res=>{
            if(res.empty){
                db.collection("lead").add(data).then(res=>{}).catch(err=>console.log(err.message))
            }
            setContactSubmited(true)
        })
    }

    const fetchPackers = () => {
        setLoading(true)
        db.collection("packers-movers")
        .where("cityLocation",">=",search.toLowerCase())
        .where("cityLocation","<=",search.toLowerCase()+ '\uf8ff')
        // .where("name","==","Rahul")
        .get().then(querySnapshot=>{
            var arr = []
            querySnapshot.forEach(doc=>{
                arr.push(doc.data())
            })
            setPackers(arr)
            setLoading(false)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="container widget my-5 position-relative">
            {/* <img src="/gif/packers-movers.gif" alt="Packers Movers" width="240px" className="position-fixed shadow-lg border" style={{bottom:10,right:10,zIndex:100}} /> */}
            <h1 className="widget_title">Packers & Movers</h1>
            <div className="d-flex align-items-start">
                <input type="search" name="search" onChange={e=>setSearch(e.target.value)} className="p-3 px-4 rounded w-100 mb-4 h5 shadow-lg" placeholder="Search for Packers and movers" />
                <button type="button" onClick={e=>fetchPackers()} className="p-3 px-md-5 bg-danger text-white">Search</button>
            </div>
            {isLoading ? <div className="text-center my-4">
                <div className="spinner-border text-info"></div>
            </div>:<>
            
                <div className="w-100 h-100 bg-light" style={{display:selectedPackers != null ? 'block':'none',position:'fixed',top:0,left:0,zIndex:10000,opacity:0.95}}>
                    <div className="container my-5 p-4 shadow-lg rounded border bg-white widget">
                        <h1 className="text-danger" onClick={()=>setSelectedPackers(null)} style={{cursor:'pointer'}}>&times;</h1>
                        <h1 className="widget_title">{selectedPackers?.businessName}</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <h5>Name : {selectedPackers?.name}</h5>
                                <h6>City Location : {selectedPackers?.cityLocation}</h6>
                                <h6>Business Location : {selectedPackers?.businessLocation}</h6>
                                <p>{selectedPackers?.businessDesc}</p>
                                <div className="grid grid-cols-6">
                                    {selectedPackers?.businessImages.map((item,key)=>(
                                        <img key={key} src={item} alt="Business Image" width="60px" />
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-4">
                                {isContactSubmited ? <>
                                    <h5>Contact Details</h5>
                                    <h1> {selectedPackers?.phone} </h1>
                                    <h1> {selectedPackers?.alternatePhone} </h1>
                                </>:<>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h5></h5>
                                        
                                        <div className="input-group my-2">
                                            <input type="text" className={`form-control p-3`} id="fullName" {...register("fullName",{required:true})} placeholder="Enter your full name" />
                                            {errors.fullName && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                                        </div>
                                        <div className="input-group my-2">
                                            <input type="tel" className={`form-control p-3`} id="phoneNumber" {...register("phoneNumber",{required:true,minLength:10,maxLength:10})} placeholder="Enter 10 digit mobile number" />
                                            {errors.phoneNumber && <img src="/icons/danger.png" alt="error" width="20px" height="20px" className="my-auto" style={{position:"absolute",right:8,top:8,zIndex:20}} />}
                                        </div>
                                        
                                        <button type="submit" className="p-2 px-md-4 bg-primary text-white">Submit & Call</button>

                                    </form>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
                {packers.length > 0 ? packers.map((val,key)=>(
                    <div key={key} className="card position-relative">
                        <div className="card-body d-flex align-items-center">
                            <img src={val.businessImages[0] || "/why/verified_drivers.jpg"} width="120px" alt="Person" />
                            <div className="p-2">
                                <h6>{val.businessName} [ <small>{val.cityLocation}</small> ] </h6>
                                <div>{val.businessDesc}</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end" style={{position:'absolute',bottom:10,right:10}}>
                                <button type="button" className="p-2 px-md-4 bg-primary text-white" onClick={()=>setSelectedPackers(val)}>Call / Show Details</button>
                            </div>

                        </div>
                    </div>
                )):<></>}
            </>}
            
        </div>
    )
}
