import { Products } from "../entities/products.entity.js";
async function createProducts(addProduct) {
  await Products.create(addProduct).go();
}

async function getAllProducts() {
  return (await Products.scan.go()).data;
}

async function editProductsById(existingData, updatedata) {
  return await Products.put({
    ...existingData.data,
    ...updatedata,
  }).go();
}

async function deleteProductsById(id) {
  await Products.delete({ productId: id }).go();
}

async function getProductsById(id) {
  return await Products.get({ productId: id }).go();
}
export {
  createProducts,
  getAllProducts,
  editProductsById,
  deleteProductsById,
  getProductsById,
};
