import React, { useEffect, useState } from "react" 
import { connect } from "react-redux" 
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"

import { AvForm, AvField } from "availity-reactstrap-validation"
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

// import images
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import { useForm } from "react-hook-form"
import CreateVehicle from "./Create"

const Vehicles = props => {
  


  return (
    <React.Fragment>
      <div className="page-content">
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Apps" breadcrumbItem="Vehicles" />
          <Row>
            <Col lg={12}>
              <Card>
                <Row className="g-0 align-items-center">
                  <Col md={2}>
                    <CardImg className="img-fluid" src={img2} alt="Card image cap" />
                  </Col>
                  <Col md={10}>
                    <CardBody>
                      <CardTitle className="h5">Card title</CardTitle>
                      <CardText>
                        This is a wider card with supporting text below as a
                        </CardText>
                      <CardText>
                        {/* <small className="text-muted">
                          Last updated 3 mins ago
                          </small> */}
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
             
          </Row> 
          <CreateVehicle />
          
          <div className="button-items d-flex">
            <Button color="primary" className="btn btn-primary waves-effect ms-auto">
              Add Vehicles
            </Button> 
            <Button color="danger" className="btn btn-danger waves-effect">
              Cancel
            </Button> 
          </div>
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