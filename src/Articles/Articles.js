import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom"

function Articles() {
    const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
        <div className="container">
            <h2 className="pl-3"> All Articles</h2>
            <div className="row articles">
            {items.map((item, i) => {
            return <Link to={`/article/${i}`}key={i}>
                    <Item

                        title={item}
                        />
                </Link>;
        })}
            </div>
        </div>
    );
}

export default Articles;