import { Order } from "../entities/orders.entity.js";

async function createOrder(orderData) {
  return await Order.create(orderData).go();
}

async function getOrdersByUserId(userId) {
  return await Order.get({ userId }).go();
}

export { createOrder, getOrdersByUserId };
