'use strict';

var React = require('react-native-universal');

var DeviceEventEmitter = React.DeviceEventEmitter;
var NativeModules = React.NativeModules;
var Platform = React.Platform;

module.exports = Platform.OS === 'web' ?
  {
    getOrientation: function(callback) { return callback('PORTRAIT') },
    addListener: function() {},
    removeListener: function() {}
  } :
  {
    getOrientation: function(callback) {
      NativeModules.OrientationListener.getOrientation(callback);
    },
    addListener: function(callback) {
      return DeviceEventEmitter.addListener(
        'orientationDidChange', callback
      );
    },
    removeListener: function(listener) {
      DeviceEventEmitter.removeListener(
        'orientationDidChange', listener
      );
    }
  }
