var mongoose = require('mongoose');
var Product = require('../models/product');

var uri = 'mongodb://shopping-cart:sc_008@cluster0-shard-00-00-jkbun.mongodb.net:27017,cluster0-shard-00-01-jkbun.mongodb.net:27017,cluster0-shard-00-02-jkbun.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(uri);

var products = [new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 5
  }),
  new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 10
  }),
  new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 12
  }),
  new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 30
  }),
  new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 20
  }),
  new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!!',
    price: 15
  })
]

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done == products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}