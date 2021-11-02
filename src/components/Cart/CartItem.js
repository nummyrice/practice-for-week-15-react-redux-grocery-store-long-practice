import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {removeFromCart, incrementCart, decrementCart, entryCart} from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  function removeItem() {
    dispatch(removeFromCart(item.id));
  }


  function incrementCount() {
    dispatch(incrementCart(item.id));
  }

  function decrementCount() {
    dispatch(decrementCart(item.id));
  }

  // function entryCount() {
  //   dispatch(entryCart(item.id, ));
  // }


  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={e => dispatch(entryCart(item.id, e.target.value))}
        />
        <button
          className="cart-item-button"
          onClick={incrementCount}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={decrementCount}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;