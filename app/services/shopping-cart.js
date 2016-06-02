import Ember from 'ember';

export default Ember.Service.extend({
	products: [],

	add(product) {
		this.get('products').pushObject(product);
	},

	remove(product) {
		this.get('products').removeObject(product);
	},

	hasproduct(product) {
		this.get('products').findBy('id', product.id);
	},

	empty(product) {
		this.get('products').setObjects([]);
	}

});
