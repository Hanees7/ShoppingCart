import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";

function Cartitem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };
  return (
    <>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <MdDeleteForever />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
