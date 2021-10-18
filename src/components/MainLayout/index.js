import React from 'react'
import { withRouter } from 'react-router'
import MainFooter from './MainFooter'
import MainNavbar from './MainNavbar'
import ScrollToTop from './ScrollToTop'
 
const MainLayout = (props) => {
    return (
        <React.Fragment>
            <ScrollToTop />
            <MainNavbar />
                {props.children}
            <MainFooter />
        </React.Fragment>
    )
}

export default withRouter(MainLayout)