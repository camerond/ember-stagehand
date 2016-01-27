/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-stagehand',
  included: function(app) {
      this._super.included(app);
      app.import('vendor/stagehand/stagehand.js');
      app.import('vendor/stagehand/stagehand.css');
    }
};
