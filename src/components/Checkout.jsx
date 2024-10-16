import React from 'react';
import { useSelector } from 'react-redux';
import { getItemsSelector } from '../redux/slices/cartSlice';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const items = useSelector(getItemsSelector);
    const total = items.cartItems.reduce((a, b) => a + (b.price * b.quantity), 0);
    const { error, isLoading, Razorpay } = useRazorpay()

    const handlePayment = () => {
        const options=
        {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: total*100, // Amount in paise
            currency: "INR",
            name: "Test Company",
            description: "Test Transaction", 
            handler: (response) => {
                console.log(response);
                alert("Payment Successful!");
                window.location.href = "/";
            },
            prefill: {
                name: "John Doe",
                email: "john.doe@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    return (
        <div className="checkout-container mx-auto max-w-3xl p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Checkout</h1>

            <div className="cart-items space-y-6">
                {items.cartItems.length > 0 ? (
                    items.cartItems.map((item) => (
                        <div key={item.productId} className="flex items-center space-x-4 border-b pb-4">
                            <img src={item.image} alt={item.productName} className="w-24 h-24 rounded-md" />
                            <div className="item-details">
                                <h2 className="text-lg font-semibold text-gray-700">{item.productName}</h2>
                                <p className="text-gray-600">Price: <span className="font-medium">${item.price}</span></p>
                                <p className="text-gray-600">Quantity: <span className="font-medium">{item.quantity}</span></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">Your cart is empty</p>
                )}
            </div>

            <div className="checkout-summary mt-8 border-t pt-6">
                <h2 className="text-xl font-bold text-gray-800">Total: ${total.toFixed(2)}</h2>
                <div className="flex space-x-4 mt-6">
                    <button
                        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-500 focus:outline-none"
                        onClick={handlePayment}
                    >
                        Proceed to Payment
                    </button>
                    <button className='bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-500 focus:outline-none'><Link to="/" className='text-white'>Go Back</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
