import React, { Component } from "react";


export default class SimpleSlider extends Component {
    render() {

        return (
            <div className="card">


                <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
                        <a href="#">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                </div>

            </div>

    )
    }
}