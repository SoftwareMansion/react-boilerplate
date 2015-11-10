'use strict';
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.js');

// Expose React for the dev tools
window.React = React;

React.initializeTouchEvents(true);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.body);
});
