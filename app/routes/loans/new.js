import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('loan', {
      friend: this.modelFor('friends/show')
    })
  },

  resetController: function ( controller, isExisting) {

    if (isExisting) {

      let model = controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

    }

  }

})
