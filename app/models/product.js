import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  
  name: attr('string'),
  description: attr('string'),
  typeOf: attr('string'),
  price: attr('number'),
  image: attr('string'),

	isSnack: Ember.computed.equal('typeOf', 'snack'),

	isShare: Ember.computed.equal('typeOf', 'share')

});
