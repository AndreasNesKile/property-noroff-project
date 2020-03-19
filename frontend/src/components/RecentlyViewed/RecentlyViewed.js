import React from "react";
import styles from "./RecentlyViewed.module.css";
import { Link } from "react-router-dom"
//React Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Renderer } from "leaflet";

function RecentlyViewed(props) {
    console.log(props.data)

    let cardImage = null
    if(props.data){
        cardImage = props.data.propertyImage.url
    } else {
        return (
            null
        )
    }

    return (
        <Card className={styles.CardContainer}>
            <Link to={`Property/${props.data.id}`}><Card.Img variant="top" src={cardImage + ".jpg"} /></Link>
        </Card>
    );
};

export default RecentlyViewed;