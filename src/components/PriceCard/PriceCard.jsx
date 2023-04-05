import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = (props) => {
    const { name, price, features } = props.price
    return (
        <div className='bg-indigo-400 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h1 className='text-2xl font-bold my-6 text-center'>{name}</h1>

            <p className='text-white font-bold underline'>Features: </p>
            {
                features.map((feature,  idx) => <Feature
                key={idx}
                feature = {feature}
                ></Feature>)
            }
            <button className='mt-auto hover:bg-green-700 w-full bg-green-500 py-2 rounded-md text-white font-bold'>Buy now</button>
        </div>
    );
};

export default PriceCard;