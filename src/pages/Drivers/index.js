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
} from "reactstrap"

import { Link } from "react-router-dom"

import classnames from "classnames"

const Drivers = props => {
 
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
                        active: activeTabJustify === "5",
                      })}
                      onClick={() => {
                        toggleCustomJustified("5")
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
                        active: activeTabJustify === "6",
                      })}
                      onClick={() => {
                        toggleCustomJustified("6")
                      }}
                    >
                      <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                      <span className="d-none d-sm-block">Pending</span>
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
                      <span className="d-none d-sm-block">Disabled</span>
                    </NavLink>
                  </NavItem>
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

                <TabContent activeTab={activeTabJustify}>
                  <TabPane tabId="5" className="p-3">
                    <p className="mb-0">
                      Raw denim you probably haven't heard of them jean shorts Austin.
                      Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                      cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                      butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                      qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                      iphone. Seitan aliquip quis cardigan american apparel, butcher
                      voluptate nisi qui.
                                            </p>
                  </TabPane>
                  <TabPane tabId="6" className="p-3">
                    <p className="mb-0">
                      Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                      single-origin coffee squid. Exercitation +1 labore velit, blog
                      sartorial PBR leggings next level wes anderson artisan four loko
                      farm-to-table craft beer twee. Qui photo booth letterpress,
                      commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                      vinyl cillum PBR. Homo nostrud organic, assumenda labore
                      aesthetic magna delectus.
                                            </p>
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

                  <TabPane tabId="8" className="p-3">
                    <p className="mb-0">
                      Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                      art party before they sold out master cleanse gluten-free squid
                      scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                      art party locavore wolf cliche high life echo park Austin. Cred
                      vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                      farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                      mustache readymade keffiyeh craft.
                                            </p>
                  </TabPane>
                </TabContent>
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