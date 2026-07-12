import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];

    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        orderItems.push({
          ...item,
          quantity: cartItems[item._id],
        });
      }
    });

    const deliveryFee =
      getTotalCartAmount() === 0
        ? 0
        : Math.ceil(getTotalCartAmount() / 40);

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryFee,
    };

    try {
      const response = await axios.post(
        url + "/api/order/place",
        orderData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing order!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const deliveryFee =
    getTotalCartAmount() === 0
      ? 0
      : Math.ceil(getTotalCartAmount() / 40);

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input
            required
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
            type="text"
            placeholder="First Name"
          />

          <input
            required
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
            type="text"
            placeholder="Last Name"
          />
        </div>

        <input
          required
          type="email"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          placeholder="Email Address"
        />

        <input
          required
          type="text"
          name="street"
          value={data.street}
          onChange={onChangeHandler}
          placeholder="Street"
        />

        <div className="multi-fields">
          <input
            required
            type="text"
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            placeholder="City"
          />

          <input
            required
            type="text"
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            placeholder="State"
          />
        </div>

        <div className="multi-fields">
          <input
            required
            type="text"
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
            placeholder="Zip Code"
          />

          <input
            required
            type="text"
            name="country"
            value={data.country}
            onChange={onChangeHandler}
            placeholder="Country"
          />
        </div>

        <input
          required
          type="text"
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
          placeholder="Phone"
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() + deliveryFee}</b>
            </div>
          </div>

          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;