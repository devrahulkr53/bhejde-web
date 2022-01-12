import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody } from 'reactstrap'
import firebase from 'firebase';
import { useDispatch } from 'react-redux';

export default function EditVehicle(props) {
    
    var db = firebase.firestore();
    var dispatch = useDispatch();
    const {register, handleSubmit} = useForm({
        defaultValues:props.vehicle
    })
    const [isLoading,setLoading] = useState(false)
    
    const onSubmit = data => {
        db.collection("vehicles").doc(props.vehicle.id).update(data)
        .then((docRef) => {
            setLoading(false)
            props.setStep('read')
            dispatch({type:"setAlert",payloads:{type:'success',msg:'vehicle updated'}})
        })
        .catch((error) => {
            setLoading(false)
            dispatch({type:"setAlert",payloads:{type:'danger',msg:error.message}})
        }); 
    }
      

    return (
        <Card>
            <CardBody>
            <h4 className="card-title">Edit vehicle</h4>
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
                </div>
                <div className="col-md-3">
                    <img src={props.vehicle.vehicleImage || '/images/gallery.png'} alt="Upload image" width="100%" className="rounded" style={{cursor:"pointer"}} />
                </div>
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
