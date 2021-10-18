import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import Alert from '../../components/Common/alert'

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,app,
  ...rest
}) => (
  <Route
    // {...rest}
    
    render={props => {

      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }

      return (
        
        <Layout>
          <Alert />
          <Component {...props} app={app} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware
