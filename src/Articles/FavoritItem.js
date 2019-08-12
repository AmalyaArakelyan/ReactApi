import React, {Component} from "react";
import {Link} from "react-router-dom"


export default class SimpleSlider extends Component {
    render() {

        return (
            <div className="card">
                <Link to={`/article/1`}>
                    <div className="view overlay">
                        <img className="card-img-top"
                             src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                             alt="Card image cap"/>
                        <a href="#">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                    </div>
                </Link>

            </div>

        )
    }
}