import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';
import Form from '../components/Form/index'
import Image from '../components/Img/index'
export default function Routes() {
  return (
    <Switch>
      <Route path="/form" component={Form} />
      <Route path="/img" component={Image} />
    </Switch>
  );
}
