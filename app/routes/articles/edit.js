import Ember from 'ember';

export default Ember.Route.extend({

  resetController(controller, isExisting) {

    if(isExisting) {
      let model = controller.get('model');
      model.rollbackAttributes();
    }

  }

});
