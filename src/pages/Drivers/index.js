import React, { useEffect, useState } from "react" 
import { connect, useDispatch } from "react-redux" 
import firebase from 'firebase';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"

import {
  TabContent,
  TabPane,
  Table,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
} from "reactstrap"

import { Link } from "react-router-dom"

import classnames from "classnames"

const Drivers = props => {
 
  var db = firebase.firestore();
  const [isLoading,setLoading] = React.useState(false)
  const [drivers,setDrivers] = React.useState([])
  const [activeTabJustify, setactiveTabJustify] = useState(false)
  

  useEffect(() => {
    fetchDrivers();

  }, [])


  const fetchDrivers = () => {
    setLoading(true)
    db.collection("users")
    .where("role","==",3)
    .get().then(querySnapshot=>{
        var arr = []
        querySnapshot.forEach(doc=>{
            console.log(doc.data())
            arr.push(doc.data())
        })
        setDrivers(arr)
        setLoading(false)
    }).catch(err=>{
        console.log(err)
    })

  }
  
  function toggleCustomJustified(tab) {
    if (activeTabJustify !== tab) {
      setactiveTabJustify(tab)
    }
  }
 
  
  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Apps" breadcrumbItem="Drivers" />
        <Card>
              <CardBody>
                {/* <CardTitle className="h4">Custom Tabs</CardTitle>
                <p className="card-title-desc">
                  Example of custom tabs
                  </p> */}

                <Nav tabs className="nav-tabs-custom nav-justified">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === true,
                      })}
                      onClick={() => {
                        toggleCustomJustified(true)
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                      <span className="d-none d-sm-block">Verified</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === false,
                      })}
                      onClick={() => {
                        toggleCustomJustified(false)
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                      <span className="d-none d-sm-block">Pending</span>
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === "7",
                      })}
                      onClick={() => {
                        toggleCustomJustified("7")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                      <span className="d-none d-sm-block">Disabled</span>
                    </NavLink>
                  </NavItem> */}
                  {/* <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTabJustify === "8",
                      })}
                      onClick={() => {
                        toggleCustomJustified("8")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                      <span className="d-none d-sm-block">Settings</span>
                    </NavLink>
                  </NavItem> */}
                </Nav>
                {drivers.filter(e=>e.verified === activeTabJustify).length > 0 ? <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      {/* <th>Vehicle Type</th> */}
                      <th>Phone Number</th>
                      <th>Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.filter(e=>e.verified === activeTabJustify).map((val,key)=>(
                      <tr key={key}>
                        <th scope="row">{key+1}</th>
                        <td>{val.name}</td>
                        {/* <td>{val.vehicleType}</td> */}
                        <td> {val.countryCode} {val.phone}</td>
                        <td>
                          <a href={val.aadharCard} target="_blank"><img src={val.aadharCard} alt="Aadhar Card" width="40px" /></a>
                          <a href={val.vehicleInsurance} target="_blank"><img src={val.vehicleInsurance} alt="Vehicle Insurance" width="40px" /></a>
                          <a href={val.vehicleRC} target="_blank"><img src={val.vehicleRC} alt="Vehicle Insurance" width="40px" /></a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>:<></>}
                
                 
              </CardBody>
            </Card>
          
          
      </div>
    </React.Fragment>
  )
}
Drivers.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Drivers)