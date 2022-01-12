import PropTypes from 'prop-types'
import React, { useEffect } from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authRoutes, mainRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"
import MainLayout from "./components/MainLayout"

// Import scss
import "./assets/scss/theme.scss"


import fakeBackend from "./helpers/AuthType/fakeBackend"
import firebase from 'firebase'

// Activating fake backend
fakeBackend()
const App = props => {
  
  function getLayout() {
    let layoutCls = VerticalLayout

    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  } 
 
  const Layout = getLayout()
  return (
    <React.Fragment>
      <Router>

        <Switch>
        {/* Authentication */}
        {authRoutes.map((route, idx) => (
          <Authmiddleware
          path={route.path}
          layout={NonAuthLayout}
          component={route.component}
          key={idx}
          isAuthProtected={false}
          />
          ))}
        {/* Website */}
        {mainRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={MainLayout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
            exact
          />
        ))}
        {/* Admin */}
        {userRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={true}
          />
        ))}
        </Switch>

      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)