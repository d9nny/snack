import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  email: attr('string'),
  message: attr('string'),

  validateEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  validMessage: Ember.computed.gte('message.length', 5),

  isEnabled: Ember.computed.and('validateEmail', 'validMessage'),
	isDisabled:  Ember.computed.not('isEnabled')


});
