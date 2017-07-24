import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  articles: Ember.computed({

    get() {
      return this.get('store').findAll('article');
    }

  }).readOnly()
});
