import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  price: Number,
  location: String,
  review: [
    {
      title: String,
      content: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  menu: {
    items: [String],
    prices: [Number],
  },
});

const orderSchema = new Schema({
  orderId: {
    type: String,
    default: function getUUId() {
      return uuidv4();
    },
  },
  orderAmount: Number,
  orderDate: {
    type: Date,
    default: new Date(),
  },
  productName: String,
  foodPrice: Number,
});

const Orders = mongoose.model("Orders", orderSchema);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export { Restaurant, Orders };
