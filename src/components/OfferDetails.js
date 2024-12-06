import React from "react";
import './OfferDetails.css';
import Truck from '../assets/truck.svg';
import Store from '../assets/store.svg';
import Per from '../assets/per.svg';

const OfferDetails = () => {
    return (
        <div className="offerdetails">
            <div className="offercard">
                <div className="offericon">
                    <img src={Truck} alt="Truck"></img>
                </div>
                <div className="offertext">
                    <p className="offerheading">Free Delivery</p>
                    <p>Free shipping for orders over ₹1500/-</p>
                </div>
            </div>

            <div className="offercard">
                <div className="offericon">
                    <img src={Store} alt="Store"></img>
                </div>
                <div className="offertext">
                    <p className="offerheading">Free Store Pickup</p>
                    <p>Visit our store to explore different products</p>
                </div>
            </div>

            <div className="offercard">
                <div className="offericon">
                    <img src={Per} alt="Deal Of The Day"></img>
                </div>
                <div className="offertext">
                    <p className="offerheading">Deal Of The Day</p>
                    <p>Order over ₹5000/- and get 5% off.</p>
                </div>
            </div>
        </div>
    ); 
} 

export default OfferDetails;
