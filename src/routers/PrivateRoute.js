import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({isAuthenticated, component:Component, ...rest}) => (
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (<Component {...props}/>):(<Redirect to='/'/>)
    )}/>
)



const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // turns into boolean
})

export default connect(mapStateToProps)(PrivateRoute)