import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function PizzaItem(props) {
    const { id, title, excerpt, featured_media, author } = props.pizza; 

    const [images, setImages] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
    const fetchImages = async () => {
        const res = await axios(`/wp-json/wp/v2/media/${featured_media}`);
        setImages(res.data.media_details.sizes.full.source_url);
    };

    const fetchAuthors = async () => {
        const res = await axios(`/wp-json/wp/v2/users/${author}`);
        setAuthors(res.data.name);
    };

    fetchImages();
    fetchAuthors();
    }, [featured_media, author]);
    return (
        <li>
            <h2>{title.rendered}</h2>
            <Link to={`/post/${id}`}><img src={images} alt={title.rendered} /></Link>
            <p dangerouslySetInnerHTML={{ __html: excerpt.rendered}}></p>
            <Link to={`/post/${id}`}>Lire</Link>
            <p>Publié par <strong>{authors}</strong></p>
            <hr />
        </li>
    )
}

export default PizzaItem;