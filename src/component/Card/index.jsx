import React from "react";
import { Link } from "react-router-dom";

export default function Card({ cardData }) {
    return (
        <Link to={"/cards/" + cardData.id}>
            <div
                style={{
                    border: "1px #fff solid",
                    width: "400px",
                    padding: "10px 20px",
                }}
            >
                <h3>
                    {cardData.id}. {cardData.title}
                </h3>
                <p>{cardData.body}</p>
            </div>
        </Link>
    );
}
