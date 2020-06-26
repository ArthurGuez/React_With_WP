import React, { useState, useEffect } from "react";
import PizzaItem from './PizzaItem';
import axios from 'axios';


function Pizzas() {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    const fetchPizzas = async () => {
        setIsLoading(true);
        const res = await axios('/wp-json/wp/v2/pizzas/');
        setPizzas(res.data);
        setIsLoading(false);
    };

    fetchPizzas();
    }, []);

    return (
        <div>
            <h1>Les Pizzas :</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                {pizzas.map(pizza => (
                    <PizzaItem key={pizza.id} pizza = {pizza}/>
                ))}
                </ul>
            )}
        </div>
    )
}

export default Pizzas;