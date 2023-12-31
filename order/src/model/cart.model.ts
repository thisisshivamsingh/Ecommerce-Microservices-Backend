import { model, Model, Schema, Types, Document } from "../database";

export interface CartItem {
  productId: Types.ObjectId;
  productQuantity: number;
}

export interface CartAttribute {
  items: CartItem[];
}

export interface CartDoc extends Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface ICartModel extends Model<CartDoc> {
  build(attributes: CartAttribute): CartDoc;
}

const cartSchema = new Schema(
  {
    items: { type: Types.ObjectId, ref: "CartItem", default: [] },
    totalPrice: { type: String, required: true },
    userId: { type: Types.ObjectId, required: true, unique: true },
  },
  { timestamps: true, versionKey: false }
);

const Cart = model<CartDoc, ICartModel>("Cart", cartSchema);

cartSchema.statics.build = (attributes: CartAttribute) => {
  return new Cart(attributes);
};

export default Cart;
