import Ember from 'ember';

export default Ember.Mixin.create({
  activate() {
    this._super(...arguments);
    Ember.$(document.body).stagehand();
  }
});
