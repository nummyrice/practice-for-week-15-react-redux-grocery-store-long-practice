import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../../store/cart';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();
  function addItem() {
    dispatch(addToCart(produce.id));
  }
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={addItem}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
