import express from 'express';
import Product from '../models/product';
const router = express.Router();

// TODO: Implement POST /products (create a new product)
router.post('/products', async (req, res) => {
  // TBD: Validate input, create product, handle errors
});

// TODO: Implement GET /products (list all products)
router.get('/products', async (req, res) => {
  // TBD: Fetch products from DB, handle errors
});

// TODO: Implement GET /products/:id (get product by id)
router.get('/products/:id', async (req, res) => {
  // TBD: Fetch product by ID, handle not found
});

// TODO: Implement PUT /products/:id (update product)
router.put('/products/:id', async (req, res) => {
  // TBD: Validate input, update product, handle errors
});

// TODO: Implement DELETE /products/:id (delete product)
router.delete('/products/:id', async (req, res) => {
  // TBD: Delete product, handle errors
});

export default router;
