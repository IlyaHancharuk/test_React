import React, { useState } from "react";

type PropsStarType = {
    selected: boolean;
    onClickHandler: () => void;
}

const Rating = () => {

    const [rating, setRating] = useState(0);

    function setOneRating() {
        setRating(1);
    }
    function setTwoRating() {
        setRating(2);
    }
    function setThreeRating() {
        setRating(3);
    }
    function setFourRating() {
        setRating(4);
    }
    function setFiveRating() {
        setRating(5);
    }

    return (
        <div>
            <Star onClickHandler={setOneRating} selected={rating > 0} />
            <Star onClickHandler={setTwoRating} selected={rating > 1} />
            <Star onClickHandler={setThreeRating} selected={rating > 2} />
            <Star onClickHandler={setFourRating} selected={rating > 3} />
            <Star onClickHandler={setFiveRating} selected={rating > 4} />
        </div>
    )
}

const Star = (props: PropsStarType) => {
    return props.selected
        ? <span onClick={props.onClickHandler}>&#9733;</span>
        : <span onClick={props.onClickHandler}>&#9734;</span>
}

export default Rating;
