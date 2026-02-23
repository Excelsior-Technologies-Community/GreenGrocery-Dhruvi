import React, { useState, useEffect } from "react";

import "../Style.css";

export default function Cart() {
    const [kgCartItems, setKgCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("kgCart");
        if (savedCart) {
            setKgCartItems(JSON.parse(savedCart));
        }
    }, []);

    const kgIncreaseQty = (id) => {
        const updated = kgCartItems.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        setKgCartItems(updated);
        localStorage.setItem("kgCart", JSON.stringify(updated));
    };

    const kgDecreaseQty = (id) => {
        const updated = kgCartItems.map((item) =>
            item.id === id && item.qty > 1
                ? { ...item, qty: item.qty - 1 }
                : item
        );
        setKgCartItems(updated);
        localStorage.setItem("kgCart", JSON.stringify(updated));
    };

    const kgRemoveItem = (id) => {
        const updated = kgCartItems.filter((item) => item.id !== id);
        setKgCartItems(updated);
        localStorage.setItem("kgCart", JSON.stringify(updated));
    };

    const kgSubtotal = kgCartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    return (
        <>
        <div className="kg-cart-page-wrapper">

            <div className="kg-cart-banner text-center">
                <h1>Cart</h1>
                <p>Home • Cart</p>
            </div>

            <div className="container mt-5">
                <div className="row">

                    <div className="col-lg-8">

                        {kgCartItems.map((item) => (
                            <div key={item.id} className="kg-cart-row">

                                <div className="kg-cart-product-info">
                                    <img src={item.img} alt={item.name} />

                                    <div>
                                        <h5>{item.name}</h5>
                                        <p className="kg-cart-price-text">
                                            ${item.price} X {item.qty}
                                        </p>
                                    </div>
                                </div>

                                <div className="kg-cart-qty-box">
                                    <button onClick={() => kgDecreaseQty(item.id)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => kgIncreaseQty(item.id)}>+</button>
                                </div>

                                <div className="kg-cart-total-price">
                                    ${(item.price * item.qty).toFixed(2)}
                                </div>

                                <i
                                    className="fas fa-trash kg-cart-remove"
                                    onClick={() => kgRemoveItem(item.id)}
                                ></i>

                            </div>
                        ))}

                        <div className="kg-coupon-section">
                            <input
                                type="text"
                                placeholder="Coupon code"
                                className="kg-coupon-input"
                            />
                            <button className="kg-apply-btn">
                                Apply Coupon
                            </button>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="kg-cart-total-box">

                            <h4>Cart totals</h4>

                            <div className="kg-total-row">
                                <span>SUBTOTAL</span>
                                <span>${kgSubtotal.toFixed(2)}</span>
                            </div>

                            <div className="kg-total-row">
                                <span>TOTAL</span>
                                <span>${kgSubtotal.toFixed(2)}</span>
                            </div>

                            <button className="kg-checkout-page-btn">
                                Proceed To Checkout
                            </button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        
        

        
        </>
    );
}