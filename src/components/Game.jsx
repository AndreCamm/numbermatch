import React, { useEffect } from "react"
import "./Game.css"
import bananas from "./imgs/bananas.jpg"
import birthdaycandles from "./imgs/birthday candles.jpg"
import blocks from "./imgs/blocks.jpg"
import brushes from "./imgs/brushes.jpg"
import cakes from "./imgs/cakes.jpg"
import cars from "./imgs/cars.jpg"
import crayons from "./imgs/crayons.jpg"
import cupcakes from "./imgs/cupcakes.jpg"
import deer from "./imgs/deer.jpg"
import donuts from "./imgs/donuts.jpg"
import ducks from "./imgs/ducks.jpg"
import eggs from "./imgs/eggs.jpg"
import elephants from "./imgs/elephants.jpg"
import hotairballoons from "./imgs/hot air balloons.jpg"
import jellybeans from "./imgs/jelly beans.jpg"
import macaroons from "./imgs/macaroons.jpg"
import pencils from "./imgs/pencils.jpg"
import people from "./imgs/people.jpg"
import peppers from "./imgs/peppers.jpg"
import pizzaslices from "./imgs/pizza slices.jpg"

const Game = () => {
    // const reducer = (total, currentValue) => {
    //     return total + currentValue
    // }

    const images = [
        {
            image_name: { bananas },
            number_of_items: 6,
        },
        {
            image_name: { birthdaycandles },
            number_of_items: 7,
        },
        {
            image_name: { blocks },
            number_of_items: 6,
        },
        {
            image_name: { brushes },
            number_of_items: 7,
        },
        {
            image_name: { cakes },
            number_of_items: 7,
        },
        {
            image_name: { cars },
            number_of_items: 2,
        },
        {
            image_name: { crayons },
            number_of_items: 8,
        },
        {
            image_name: { cupcakes },
            number_of_items: 7,
        },
        {
            image_name: { deer },
            number_of_items: 3,
        },
        {
            image_name: { donuts },
            number_of_items: 6,
        },
        {
            image_name: { ducks },
            number_of_items: 6,
        },
        {
            image_name: { eggs },
            number_of_items: 8,
        },
        {
            image_name: { elephants },
            number_of_items: 7,
        },
        {
            image_name: { hotairballoons },
            number_of_items: 5,
        },
        {
            image_name: { jellybeans },
            number_of_items: 9,
        },
        {
            image_name: { macaroons },
            number_of_items: 7,
        },
        {
            image_name: { pencils },
            number_of_items: 12,
        },
        {
            image_name: { people },
            number_of_items: 6,
        },
        {
            image_name: { peppers },
            number_of_items: 2,
        },
        {
            image_name: { pizzaslices },
            number_of_items: 8,
        },
    ]

    const randomNumber = Math.floor(Math.random() * images.length)
    const randomImageName = images[randomNumber].image_name
    const imageContainer = document.getElementById("imageContainer")

    const image = document.createElement("img")
    image.src = randomImageName
    imageContainer.appendChild(`./imgs/${randomImageName}`)

    return (
        <main id="game-area">
            <div className="stats">
                <div id="statsContent">
                    <h3>
                        Score: <span id="currentScore">7</span> /
                        <span id="totalAvailable">20</span>
                    </h3>

                    <p className="items">
                        <span id="number"></span>6
                        <span id="item-name"> ducks</span>
                    </p>
                    <div className="match-buttons">
                        <button>&#10003;</button>
                        <button>&#10007;</button>
                    </div>
                </div>
            </div>
            <div className="imageArea">
                <h3 id="message"></h3>
                {/* <div id="startScreen">
                    <h1>
                        Welcome to the <em>Number Match</em> game...
                    </h1>
                    <em className="space-y">The rules are simple. </em>
                    <p className="space-y">
                        &#9654; Hit thumbs up if the number of items on the
                        image matches the displayed number.
                    </p>
                    <p className="space-y">&#9654; Thumbs down if no match!</p>
                    <p className="space-y">
                        You have <span id="timeSetting"></span> seconds to
                        decide.
                    </p>
                </div>
                <button id="play-button">Play!</button> */}
                <div id="imageContainer">
                    <img src={macaroons} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Game
