import React, { useEffect, useState } from "react" 
import { connect, useDispatch } from "react-redux" 
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"
 
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Label
} from "reactstrap"
import firebase from 'firebase';


import CreateVehicle from "./Create"
import EditVehicle from "./Edit"

const Vehicles = props => {

  var db = firebase.firestore();
  var storage = firebase.storage();
  var dispatch = useDispatch();
  const [vehicles,setVehicles] = useState([])
  const [vehicle,setVehicle] = useState(null)
  const [isLoading,setLoading] = useState(true)
  const [step,setStep] = useState('read')


  useEffect(()=>{
    db.collection("vehicles").onSnapshot((querySnapshot) => {
      var data = []
      querySnapshot.forEach((doc) => {
        doc.data() && data.push({id:doc.id,...doc.data()}) 
      });
      setLoading(false)
      setVehicles(data)
    });
    return ()=>{}
  },[])
 

  const deleteVehicle = (x) => {
    var desertRef = storage.refFromURL(x.vehicleImage);
    desertRef.delete().then(() => {
      // File deleted successfully
      db.collection("vehicles").doc(x.id).delete().then((res) => {
        dispatch({type:"setAlert",payloads:{type:'danger',msg:'Vehicle removed'}})
      });  
    }).catch((error) => dispatch({type:"setAlert",payloads:{type:'danger',msg:error.message}}));
     
  }

  const editVehicle = (x) => {
    setVehicle(x)
    setStep('edit')
  }
 
  
  return (
    <React.Fragment>
      <div className="page-content">
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Apps" breadcrumbItem="Vehicles" />
          {vehicles?.length === 0 && !isLoading && step === 'read' && <>
            <div className="display-6">No vehicles found</div>
            <p className="text-secondary">Add new vehicles for drivers to register with their vehicles type</p>
          </>}
          {step === 'create' && !isLoading ? <CreateVehicle {...{step,setStep}} /> : <></>}
          {step === 'edit' && !isLoading ? <EditVehicle {...{step,setStep,vehicle}} /> : <></>}
          {step === 'read' && <>
            {isLoading ? <div className="text-center">
              <div className="spinner-border text-info"></div>
            </div>:<>
              <Row>
                {vehicles?.map((val,key)=>(
                  <Col lg={12} key={key}>
                    <Card>
                      <Row className="g-0 align-items-center">
                        <Col md={2}>
                          <CardImg className="img-fluid" src={val.vehicleImage} alt="Card image cap" />
                        </Col>
                        <Col md={8}>
                          <CardBody>
                            <CardTitle className="h5">{val.vehicleName}</CardTitle>
                            <CardText>
                              {val.vehicleDesc}
                              </CardText>
                            <CardText>
                              {/* <small className="text-muted">
                                Last updated 3 mins ago
                                </small> */}
                            </CardText>
                            
                          </CardBody>
                        </Col>
                        
                        <Col md={2} className="d-flex">
                          <Button color="primary" onClick={()=>editVehicle(val)} className="btn btn-primary waves-effect ms-auto me-2">
                            Edit
                          </Button>
                          <Button color="danger" onClick={()=>deleteVehicle(val)} className="btn btn-danger waves-effect ms-auto me-2">
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>}
          </>}
          
          {!isLoading && <div className="button-items d-flex">
            <Button color="primary" onClick={()=>setStep('create')} disabled={step === 'create'} className="btn btn-primary waves-effect ms-auto">
              Add Vehicles
            </Button> 
            <Button color="danger" onClick={()=>setStep('read')} disabled={step === 'read'} className="btn btn-danger waves-effect">
              Cancel
            </Button> 
          </div>}
          
           
          
          
      </div>
    </React.Fragment>
  )
}
Vehicles.propTypes = {
  // events: PropTypes.array,
  // categories: PropTypes.array,
  // className: PropTypes.string,
  // onGetEvents: PropTypes.func,
  // onAddNewEvent: PropTypes.func,
  // onUpdateEvent: PropTypes.func,
  // onDeleteEvent: PropTypes.func,
  // onGetCategories: PropTypes.func,
}
const mapStateToProps = ({ calendar }) => ({
  // events: calendar.events,
  // categories: calendar.categories,
  // isEventUpdated: calendar.isEventUpdated
})
const mapDispatchToProps = dispatch => ({
  // onGetEvents: () => dispatch(getEvents()),
  // onGetCategories: () => dispatch(getCategories()),
  // onAddNewEvent: event => dispatch(addNewEvent(event)),
  // onUpdateEvent: event => dispatch(updateEvent(event)),
  // onDeleteEvent: event => dispatch(deleteEvent(event)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)