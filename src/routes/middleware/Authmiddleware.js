import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import Alert from '../../components/Common/alert'
import firebase from 'firebase'
const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    // {...rest}
    
    render={props => {

      firebase.auth().onAuthStateChanged(user=>{
        if(!user && isAuthProtected){
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
          
        }
      })

      return (
        
        <Layout>
          <Alert />
          <Component {...props} />
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
