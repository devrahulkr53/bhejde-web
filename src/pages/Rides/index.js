import React, { useEffect, useState } from "react" 
import { connect, useDispatch } from "react-redux" 
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"
 

const Rides = props => {
  
  
  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Apps" breadcrumbItem="Rides" />
        
          
          
      </div>
    </React.Fragment>
  )
}
Rides.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Rides)