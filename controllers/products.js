const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product.ejs',
    {
      docTitle: 'Add Product',
      path: '/add-prod',
      activeAddProduct: true,
      formCSS: true
    }
  );
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop.ejs',
      {
        prods: products,
        docTitle: 'Shop',
        path: '/shop',
        hasProducts: products.length > 0,
        activeShop: true
      }
    );
  });
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}