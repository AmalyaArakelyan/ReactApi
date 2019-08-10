import React from "react";
import Item from "./Item";


function Articles() {
    const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
        <div className="container">
            <div className="row">
            {items.map((item, i) => {
            return <Item key={i} title={item} />;
        })}
            </div>
        </div>
    );
}

export default Articles;