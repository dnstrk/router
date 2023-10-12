import React from "react";
import Card from "../Card";
import { Link, useParams } from "react-router-dom";

export default function CardsPage() {
    const cards = [
        { id: 1, title: "JS", body: "text for JS" },
        { id: 2, title: "C", body: "text for C" },
        { id: 3, title: "Py", body: "text for Py" },
    ];

    return (
        <ul style={{width: '400px'}}>
            {cards.map((card) => (
                <Card cardData={card}></Card>
            ))}
        </ul>
    );
}
