import React, { useState, useEffect, Fragment, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function PizzaPage() {
    const { pizzaId } = useParams();

    const [content, setContent] = useState();
    const [restaurant, setRestaurant] = useState();
    const [like, setLike] = useState();

    useEffect(() => {
    const fetchPizzaById = async (pizzaId) => {
        const res = await axios(`/wp-json/wp/v2/pizzas/${pizzaId}`);

        setContent(res.data.content.rendered);
        setRestaurant(res.data.acf.restaurant);
        setLike(res.data.acf.likes_number);
    };

    fetchPizzaById(pizzaId);
    });

    const addLike = useCallback(async () => {
        await axios(`/wp-json/example/v2/likes/${pizzaId}`);
        }, [pizzaId]);

    return (
        <Fragment>
            <Link to='/'>Page Précédente</Link>
            
            <hr />

            <p dangerouslySetInnerHTML={{ __html: content}}></p>

            <p>Restaurant: {restaurant}</p>

            <button type="button" onClick={addLike}>
                <span>{like}</span>
            </button>
        </Fragment>
    )
}

export default PizzaPage;