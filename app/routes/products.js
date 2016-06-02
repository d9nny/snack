import Ember from 'ember';

export default Ember.Route.extend({

	shoppingCart: Ember.inject.service(),

	model() {
		return this.store.findAll('product');
	},

	actions: {

		addToCart(product) {
			console.log(product);
			this.get('shoppingCart').add(product);
		}
	}

});
