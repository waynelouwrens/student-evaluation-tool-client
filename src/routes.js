import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Batches,
  SignIn,
  SignUp,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Batches} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
