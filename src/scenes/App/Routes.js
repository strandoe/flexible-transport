import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NetworksOverview from '../Networks';
import NetworkEditor from '../Networks/scenes/Editor';
import LinesOverview from '../Lines';
import LinesEditor from '../Lines/scenes/Editor';
import StopPlacesOverview from '../StopPlaces';
import StopPlacesEditor from '../StopPlaces/scenes/Editor';

const Routes = () => (
  <div className="routes">
    <Switch>
      <Route exact path="/" component={NetworksOverview} />
      <Route exact path="/networks" component={NetworksOverview} />
      <Route exact path="/networks/create" component={NetworkEditor} />
      <Route exact path="/networks/edit/:id" component={NetworkEditor} />
      <Route exact path="/lines" component={LinesOverview} />
      <Route exact path="/lines/create" component={LinesEditor} />
      <Route exact path="/lines/edit/:id" component={LinesEditor} />
      <Route exact path="/stop-places" component={StopPlacesOverview} />
      <Route exact path="/stop-places/create" component={StopPlacesEditor} />
      <Route exact path="/stop-places/edit/:id" component={StopPlacesEditor} />
    </Switch>
  </div>
);

export default Routes;