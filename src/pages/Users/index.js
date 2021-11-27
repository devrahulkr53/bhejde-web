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
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table
} from "reactstrap"
import { MDBDataTable } from "mdbreact"
import { data } from './data'
import classnames from "classnames"

const Users = props => {
 
  var db = firebase.firestore();
  const [isLoading,setLoading] = React.useState(false)
  const [users,setUsers] = React.useState([])
  const [activeTabJustify, setactiveTabJustify] = useState("5")
 console.log(data)

  useEffect(() => {
    fetchUsers();

  }, [])


  const fetchUsers = () => {
    setLoading(true)
    db.collection("users")
    // .where("name","==","Rahul")
    .get().then(querySnapshot=>{
        var arr = []
        querySnapshot.forEach(doc=>{
            console.log(doc.data())
            arr.push(doc.data())
        })
        data.rows = arr;
        setUsers(arr)
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
        <Breadcrumbs title="Apps" breadcrumbItem="Users" />
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
                    active: activeTabJustify === "5",
                  })}
                  onClick={() => {
                    toggleCustomJustified("5")
                  }}
                >
                  <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                  <span className="d-none d-sm-block">Passenger</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: activeTabJustify === "6",
                  })}
                  onClick={() => {
                    toggleCustomJustified("6")
                  }}
                >
                  <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                  <span className="d-none d-sm-block">Merchant</span>
                </NavLink>
              </NavItem>
              <NavItem>
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
                  <span className="d-none d-sm-block">Admin</span>
                </NavLink>
              </NavItem> 
            </Nav>

            
            
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <TabContent activeTab={activeTabJustify}>
              <TabPane tabId="5" className="p-3">
                {/* {!isLoading && <MDBDataTable responsive striped bordered data={data} />} */}
                
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Documents</th>
                      <th>Verified</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.filter(e=>e.role === 1).map((val,key)=>(
                      <tr key={key}>
                        <th scope="row">{key+1}</th>
                        <td>{val.name}</td>
                        <td>{val.phone}</td>
                        <td>{val.aadharCard}</td>
                        <td>{val.verified ? 'yes':'no'}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                        
              </TabPane>
              <TabPane tabId="6" className="p-3">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Documents</th>
                      <th>Verified</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.filter(e=>e.role === 2).map((val,key)=>(
                      <tr key={key}>
                        <th scope="row">{key+1}</th>
                        <td>{val.name}</td>
                        <td>{val.phone}</td>
                        <td>{val.aadharCard}</td>
                        <td>{val.verified ? 'yes':'no'}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              
              </TabPane>
              <TabPane tabId="7" className="p-3">
                <p className="mb-0">
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they
                  sold out mcsweeney's organic lomo retro fanny pack lo-fi
                  farm-to-table readymade. Messenger bag gentrify pitchfork
                  tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                  Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                  mi whatever gluten-free carles.
                                        </p>
              </TabPane> 
            </TabContent>
          </CardBody>
        </Card>
          
          
      </div>
    </React.Fragment>
  )
}
Users.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Users)