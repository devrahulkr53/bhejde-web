import React, { useEffect } from "react" 
import { connect } from "react-redux" 
import firebase from 'firebase';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"
 

const PendingPayments = props => {
  
  var db = firebase.firestore();
  const [payments,setPayments] = React.useState([])
  const [isLoading,setLoading] = React.useState(true)

  useEffect(async () => {
    const subscription = await db.collection("users").where("role","==",3)
    .get().then(async querySnapshot=>{
        var arr = []
        querySnapshot.forEach(doc=>{
          arr.push(doc.data())
        })
        await Promise.all(arr.map(async (val,key)=>{
          await db.collection("rides")
          .where("payment","==","online")
          .where("driverId","==",val.uid).get().then(res=>{
            var rides = []
            res.forEach(el=>{
              rides.push(el.data())
            })
            val.pendingAmt = rides.map(e=>Number(e.amount)).reduce((a,b)=>a+b)
          })
          await db.collection("vehicles").doc(val.vehicleType).get().then(res=>{
            val.vehicle = res.data()
          })
          return val;
        }))
        setPayments(arr)
        setLoading(false)
      }).catch(err=>{
        console.log(err)
      })
      
    }, [])

  return ( 
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Apps" breadcrumbItem="Pending Payments" />

        {isLoading ? <div className="text-center py-4">
          <div className="spinner-border text-info"></div>
        </div>:<>
          {payments.length > 0 ? payments.map((val,key)=>{
            return <div key={key} className={`card shadow-sm border-3 border-primary`}>
              <div className="card-body">
                <h4 className="card-title"> {val.name} - {val.vehicle.vehicleName} </h4>
                <div className="d-flex-row d-md-flex">
                  <div>
                    <div className="h5">UID :{val.uid}</div>
                    <div className="h4">{val.vehicleRegNo}</div>
                  </div>
                  
                  <div className="ms-auto">
                    <small className="text-secondary">Pending Amount</small>
                    <div className={`h4 text-uppercase text-primary`}> Rs. {val?.pendingAmt} </div>
                  </div>

                </div>
                <div className="btn-group float-end">
                  <a href="#" className="btn btn-primary">Pay Now</a>
                  <a href="#" className="btn btn-secondary">Driver Details</a>
                </div>
                
              </div>
            </div>
          }):<></>}
        </>}
        
          
      </div>
    </React.Fragment>
  )
}
PendingPayments.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(PendingPayments)