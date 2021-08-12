import { map } from 'async'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'


export const PublicRoute = ({isAuthenticated,component,...rest}) => (
    <Route {...rest} component = {(props)=>(
        isAuthenticated ? (<Redirect to='/'/>) : (<Component {...props}/>)
    )}/>
)


const mapStateToProps = (state)=>(
    {    
        isAuthenticated = state.auth.uid
    }
)

export default connect(mapStateToProps)(PublicRoute)