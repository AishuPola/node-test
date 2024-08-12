import {
  createProducts,
  getAllProducts,
  editProductsById,
  deleteProductsById,
  getProductsById,
} from "../services/products.service.js";
import { v4 as uuidv4 } from "uuid";

async function getAllProductsCtrl(request, response) {
  try {
    response.send(await getAllProducts());
  } catch (error) {
    //call back funtion we have req and res
    console.log(err);
    response.send("Products not loaded");
  }
}
async function getProductsByIdCtrl(request, response) {
  const { id } = request.params;
  try {
    const res = await getProductsById(id);
    res.data
      ? response.send(res.data)
      : response.status(404).send("product not found");
  } catch (error) {
    console.log(error);
    response.status(500).send("fail to retrireve movie");
  }
}
async function deleteProductsByIdCtrl(request, response) {
  const { id } = request.params;
  console.log(id);
  try {
    const res = await getProductsById(id);
    if (res.data) {
      await deleteProductsById(id);
      response.send({ msg: "deleted successfully", data: res.data });
      console.log(res);
    } else {
      response.status(404).send({ msg: "product not found" });
    }
  } catch (error) {
    response.status(500).send("deleted failed");
  }
}
async function AddProductsCtrl(request, response) {
  const data = request.body;
  const addProduct = {
    ...data,
    productId: uuidv4(),
  };
  try {
    await createProducts(addProduct);

    response.status(201).send(addProduct);
  } catch (error) {
    response.status(500).send("fail to add Product"); //something bad happend on serve is 500
  }
  // data.movieId = uuidv4();
}
async function editProductsByIdctrl(request, response) {
  const { id } = request.params;
  const updatedata = request.body; //updated data
  try {
    const existingData = await getProductsById(id);
    if (existingData.data) {
      const result = await editProductsById(existingData, updatedata);
      response.send(result);
    } else {
      response.status(404).send({ msg: "product not found" });
    }
  } catch (error) {
    response.status(500).send("failed to edit the product");
  }
  // console.log(id, data, movieIdx);
}
export {
  getAllProductsCtrl,
  getProductsByIdCtrl,
  deleteProductsByIdCtrl,
  AddProductsCtrl,
  editProductsByIdctrl,
};
