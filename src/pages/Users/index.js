import React, { useEffect, useState } from "react" 
import { connect, useDispatch } from "react-redux" 
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
 
  const [activeTabJustify, setactiveTabJustify] = useState("5")
 
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
                    <MDBDataTable responsive striped bordered data={data} />
                            
                  </TabPane>
                  <TabPane tabId="6" className="p-3">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
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