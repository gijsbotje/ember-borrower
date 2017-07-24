import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('friends/show').get('loans').then((loans) => {
      loans.forEach((loan) => {
        loan.get('article');
      });

      return loans;
    });
  }
});
