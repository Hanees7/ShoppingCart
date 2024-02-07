import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
import {toast} from 'react-hot-toast'

function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from Cart");
  };

  const addItem = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  return (
    <>
      <div>
        <p>{post.title}</p>
      </div>
      <div>{post.description}</div>
      <div>
        <img src={post.image} alt="Img" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>

      {/* <button>
      {
        false ? <p> Remove from Carr </p> : <p> Add to Cart</p>
        }
        </button> */}
      {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeItem}>Remove Item</button>
      ) : (
        <button onClick={addItem}>Add To Cart</button>
      )}
    </>
  );
}

export default Product;
