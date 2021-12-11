import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Dashboard2 from "../pages/Dashboard2.js/index.js"

//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Register1 from "../pages/AuthenticationInner/Register"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"

import Home from "../pages/Home"
import RegisterDriver from "../pages/RegisterDriver"
import About from "../pages/About/index"
import Terms from "../pages/Terms"
import Privacy from "../pages/Privacy"
import Rides from "../pages/Rides"
import Vehicles from "../pages/Vehicles"
import Drivers from "../pages/Drivers"
import RegisterPackersMovers from "../pages/PackersMovers/create"
import ShowPackersMovers from "../pages/PackersMovers/show"
import Users from "../pages/Users"
import ContactUs from "../pages/ContactUs"
import Faq from "../pages/Faq"

const userRoutes = [
  { path: "/dashboard", component: Dashboard2 },
  { path : '/dashboard2' , component : Dashboard},
  // { path: "/calendar", component: Calendar },
  { path: "/rides", component: Rides },
  { path: "/vehicles", component: Vehicles },
  { path: "/drivers", component: Drivers },
  { path: "/users", component: Users },
  // this route should be at the end of all other routes
  { path: "**", exact: true, component: () => <Redirect to="/pages-404" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  
  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
  
  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-register", component: Register1 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/auth-lock-screen", component: LockScreen },
]

const mainRoutes = [
  
  { path: "/", exact: true, component: () => <Redirect to="/homepage" /> },
  { path: "/homepage", component: Home },
  { path: "/driver/register", component: RegisterDriver },
  { path: "/packers-movers", component: ShowPackersMovers },
  { path: "/packers-movers/register", component: RegisterPackersMovers },
  { path: "/about", component: About },
  { path: "/contactus", component: ContactUs },
  { path: "/faq", component: Faq },
  { path: "/terms", component: Terms },
  { path: "/privacy-policy", component: Privacy },
  
]

export { userRoutes, authRoutes, mainRoutes }