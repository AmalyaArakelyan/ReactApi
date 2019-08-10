import React, { Component } from "react";
import Slider from "react-slick";
import FavoritItem from "./FavoritItem"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true
        };
        return (
            <div className='container'>
                <h2> Your Favorites</h2>
                <Slider {...settings}>
                    <FavoritItem />
                    <FavoritItem />
                    <FavoritItem />
                    <FavoritItem />
                    <FavoritItem />
                    <FavoritItem />
                </Slider>
            </div>
        );
    }
}