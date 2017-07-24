import Ember from 'ember';

export default Ember.Component.extend({

  hasEmail:     Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName:  Ember.computed.notEmpty('model.lastName'),
  hasTwitter:   Ember.computed.notEmpty('model.twitter'),
  isValid:      Ember.computed.and(
    'model.email',
    'model.firstname',
    'model.lastname',
    'model.twitter',
  ),
  actions: {
    save() {
      console.log('+- save action in edit-form component');

      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          return this.save(friend);
        }, (err) => {
          this.set('errorMessage', 'there was something wrong saving the model');
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      this.save(this.get('model'));
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel(this.get('model'));
    }
  }
});
