import React, { useEffect } from "react" 
import { connect } from "react-redux" 
import firebase from 'firebase';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"
 

const Rides = props => {
  
  var db = firebase.firestore();
  const [rides,setRides] = React.useState(null)
  const [isLoading,setLoading] = React.useState(true)

  useEffect(() => {
    fetchRides();

  }, [])
  const fetchRides = () => {
    setLoading(true)
    db.collection("rides").limit(5)
    .get().then(querySnapshot=>{
        var arr = []
        querySnapshot.forEach(doc=>{
            arr.push(doc.data())
        })
        console.log(arr)
        setRides(arr)
        setLoading(false)
    }).catch(err=>{
        console.log(err)
    })
  }
  return ( 
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Apps" breadcrumbItem="Rides" />
        <div className="mb-4 input-group">
          <input type="text" name="search" className="p-4 shadow form-control text-2xl" placeholder="Search rides .." />
          <div className="input-group-append">
            <button className="btn btn-secondary px-5">Search</button>
          </div>
        </div>

        {isLoading ? <div className="text-center py-4">
          <div className="spinner-border text-info"></div>
        </div>:<>
          {rides.length > 0 ? rides.map((val,key)=>{
            var colour = val.status == 'completed'? 'success':val.status == 'cancelled'?'danger':'primary';
            return <div key={key} className={`card shadow-sm border-3 border-${colour}`}>
              <div className="card-body">
                <h4 className="card-title">{val.pickup} </h4>
                <div className="d-flex-row d-md-flex">
                  <div>
                    <div className="h4">{val.destination}</div>
                    <div className="card-text">
                      <img src={val.selectedMaterial.img} width={"30px"} className="pe-2" alt="" /> 
                      {val.selectedMaterial.value}
                    </div>
                  </div>
                  
                  <div className="ms-auto">
                    <small className="text-secondary">{val.createdAt.toDate().toDateString()}</small>
                    <div className={`h4 text-uppercase text-${colour}`}> {val.status} </div>
                  </div>

                </div>
                {/* <div className="btn-group">
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                  <a href="#" className="btn btn-secondary">Explore</a>
                </div> */}
              </div>
            </div>
          }):<>
          
          </>}
        </>}

        <div className="text-end">
          <div className="btn-group">
            <div className="btn btn-secondary px-5">Previous</div>
            <div className="btn btn-primary px-5">Next</div>
          </div>
        </div>
        
          
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