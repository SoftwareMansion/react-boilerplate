'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;

var HomeScreen = require('./views/HomeScreen/HomeScreen');
var RouteNotFoundScreen = require('./views/RouteNotFoundScreen');

var routes = (
  <Route>
    <Router.DefaultRoute handler={HomeScreen}/>
    <Router.NotFoundRoute handler={RouteNotFoundScreen} name='not-found'/>
  </Route>
);

module.exports = routes;
