import React from 'react';
import Product from './Product';



export default function Main(props) {
    const {product, onAdd} = props;
    return(
    <div>Konfigurator Taśm Led
        <div>
            {product.map((index) =>
                (
                    <Product key={index.id} product={index} onAdd={onAdd}></Product>
                )
            )}


        </div>
    </div>

    )
};
