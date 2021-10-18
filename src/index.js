import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import firebase from 'firebase';
import store from "./store"
import firebaseConfig from './helpers/firebase'

firebase.initializeApp(firebaseConfig)
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
