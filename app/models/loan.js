import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  notes: attr('string', {defaultValue: ''}),
  returned: attr('boolean'),
  createdAt: attr('date'),
  friends: belongsTo('friends'),
  article: belongsTo('article')
});
