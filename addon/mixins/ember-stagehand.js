import Ember from 'ember';

export default Ember.Mixin.create({
  activate() {
    this._super(...arguments);
    $(document).ready(function() {
      Stagehand.init();
    });
  },
  actions: {
    didTransition() {
      Ember.run.schedule("afterRender", this, function() {
        Stagehand.refresh();
      });
    }
  }
});
