import React, { useEffect } from "react" 
import { connect } from "react-redux" 
import firebase from 'firebase';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb" 
//css
import "@fullcalendar/bootstrap/main.css"
import { useForm } from "react-hook-form";
 

const AdminPackersMovers = props => {
  
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

  console.log(packers)

  return ( 
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Apps" breadcrumbItem="Packers Movers" />
        <div className="mb-4 input-group">
          <input type="text" name="search" className="p-4 shadow form-control text-2xl" placeholder="Search packers .." />
          <div className="input-group-append">
            <button className="btn btn-secondary px-5">Search</button>
          </div>
        </div>

        {isLoading ? <div className="text-center py-4">
          <div className="spinner-border text-info"></div>
        </div>:<>
          {packers.length > 0 ? packers.map((val,key)=>{
            var colour = val?.plan === 0? 'secondary':val?.plan === 1?'Info':val?.plan === 2 ?'primary':'';
            var plan = val?.plan === 0? 'Free':val?.plan === 1?'Basic':val?.plan === 2 ?'Premium':'';
            return <div key={key} className={`card shadow-sm border-3 border-${colour}`}>
              <div className="card-body">
                <div className={`float-end h4 text-${colour}`}> {plan} </div>
                <h4 className="card-title">{val?.cityLocation} </h4>
                <div className="d-flex-row d-md-flex">
                  <div>
                    <div className="h4">{val?.businessName}</div>
                    <div>{val?.businessDesc}</div>
                    <div className="card-text">
                      {/* <img src={val?.selectedMaterial.img} width={"30px"} className="pe-2" alt="" />  */}
                      {val?.selectedMaterial?.value}
                    </div>
                  </div>
                  
                  <div className="ms-auto">
                    {/* <small className="text-secondary">{val?.createdAt.toDate().toDateString()}</small> */}
                    <div className={`h4 text-uppercase text-${colour}`}> {val?.status} </div>
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
AdminPackersMovers.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminPackersMovers)