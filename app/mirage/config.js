export default function() {

  this.get('/products', function() {
    return { 
      data: [{
        type: 'products',
        id:1,
        attributes: {
          name: "Mediterranean Snack Pop's",
          'type-of': 'snack',
          description: '',
          price: 0.89,
          image: ''
        }
      }, {
        type: 'products',
        id:2,
        attributes: {
          name: "Spicy Snack Pop's",
          'type-of': 'snack',
          description: '',
          price: 0.89,
          image: ''
        }
      }, {
        type: 'products',
        id:3,
        attributes: {
          name: "Lightly Salted Snack Pop's",
          'type-of': 'snack',
          description: '',
          price: 0.89,
          image: ''
        }
      },{
        type: 'products',
        id:4,
        attributes: {
          name: "Mediterranean Snack Pop's",
          'type-of': 'share',
          description: '',
          price: 1.99,
          image: ''
        }
      }, {
        type: 'products',
        id:5,
        attributes: {
          name: "Spicy Snack Pop's",
          'type-of': 'share',
          description: '',
          price: 1.99,
          image: ''
        }      
      }, {
        type: 'products',
        id:6,
        attributes: {
          name: "Lightly Salted Snack Pop's",
          'type-of': 'share',
          description: '',
          price: 1.99,
          image: ''
        }
      }]
    };
  });
}
