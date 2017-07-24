import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('friend');
  },

  resetController: function ( controller, isExisting) {

    if (isExisting) {

      let model = controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

    }

  }

});
