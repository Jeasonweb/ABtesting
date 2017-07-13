import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'

import CounterContainer from '@/containers/CounterContainer'
import AppContainer from '@/containers/AppContainer'
import HomeContainer from '@/containers/HomeContainer'
import NoMatchContainer from '@/containers/NoMatchContainer'
import FormContainer from '@/containers/SimpleFormContainer'
import DataBoardAsync from '@/containers/DataBoardContainer'

const routes = (
  <BrowserRouter>
    <AppContainer>
      <Switch>
        <Route path='/counter' component={CounterContainer} />
        <Route path='/home' component={HomeContainer} />
        <Route path='/form' component={FormContainer} />
        <Route path="/databoard" component={DataBoardAsync} />
        <Route component={NoMatchContainer} />
      </Switch>
      <Redirect from='/' to='/home' />
    </AppContainer>
  </BrowserRouter>
)

export default routes
