'use strict';

var React = require('react/addons');
var Router = require('react-router');
var _ = require('lodash');

var PropTypes = React.PropTypes;
var PureRenderMixin = React.addons.PureRenderMixin;

var HomeScreen = React.createClass({
  contextTypes: {
    router: React.PropTypes.func,
  },
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
});


module.exports = HomeScreen;
