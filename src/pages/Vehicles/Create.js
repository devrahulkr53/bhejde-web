import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody } from 'reactstrap'
import firebase from 'firebase';
import { useDispatch } from 'react-redux';

export default function CreateVehicle(props) {
    
    var db = firebase.firestore();
    var storageRef = firebase.storage().ref();
    var dispatch = useDispatch();
    const {register, handleSubmit, watch} = useForm()
    const [image,setImage] = useState(null)
    const [isLoading,setLoading] = useState(false)
    // Callback version of watch.  It's your responsibility to unsubscribe when done.
    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
        if(name === 'vehicleImage'){
            onImageChange(value.vehicleImage[0])
        }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = data => {
        if(data.vehicleImage[0]){
            setLoading(true) 
            uploadFile(data.vehicleImage[0]).then(res=>{
                db.collection("vehicles").add({...data,vehicleImage:res})
                .then((docRef) => {
                    setLoading(false)
                    props.setStep('read')
                    dispatch({type:"setAlert",payloads:{type:'success',msg:'New vehicle is added'}})
                })
                .catch((error) => {
                    setLoading(false)
                    dispatch({type:"setAlert",payloads:{type:'danger',msg:error.message}})
                });
            }).catch(err=>{
                console.log(err)
                setLoading(false)
                dispatch({type:"setAlert",payloads:{type:'danger',msg:err.message}})    
            }) 

        }
    }
    
    const onImageChange = e => {
        var reader = new FileReader();
        reader.readAsDataURL(e); 
        reader.onloadend = function() {
        var base64data = reader.result;    
        setImage(base64data)
        }
        
    }

    const uploadFile = async (file) => {
        return new Promise((resolve,reject)=>{
            var uploadTask = storageRef.child('vehicles/'+ new Date().toISOString() + file.name).put(file);
     
            uploadTask.on('state_changed', 
            (snapshot) => { 
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
            }, 
            (error) => {
                // Handle unsuccessful uploads
                reject(error)
            }, 
            () => { 
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    resolve(downloadURL)
                });
            }
            );
        })
    }

    return (
        <Card>
            <CardBody>
            <h4 className="card-title">Create new vehicle type</h4>
            {/* <p className="card-title-desc">
                Provide valuable, actionable feedback to your users with
                HTML5 form validation–available in all our supported
                browsers.
            </p> */}
            <form id="vehiclesForm" onSubmit={handleSubmit(onSubmit)} className="row">
                <div className="col-md-9">
                    <input type="text" {...register("vehicleName",{required:true})} name="vehicleName" className="form-control mb-2" placeholder="Enter vehicle name" />
                    <input type="number" {...register("costPerKm",{required:true})} name="costPerKm" className="form-control mb-2" placeholder="Cost per km (in Rs)" />
                    <textarea {...register("vehicleDesc",{required:true})} name="vehicleDesc" cols="30" rows="4" className="form-control mb-2" placeholder="Write something about this vehicle"></textarea>
                    <input type="file" {...register("vehicleImage",{required:true})} name="vehicleImage" id="vehicleImage" className="d-none"  />
                </div>
                <label htmlFor="vehicleImage" className="col-md-3">
                    <img src={image || '/images/gallery.png'} alt="Upload image" width="100%" className="rounded" style={{cursor:"pointer"}} />
                </label>
                <div>
                    <Button color="primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading ...':'Submit'}
                    </Button>
                </div>
            </form>
            </CardBody>
        </Card>
    )
}
