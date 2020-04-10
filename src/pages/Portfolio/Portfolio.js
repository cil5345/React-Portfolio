import React from "react";
import Card from "../../component/Card";
import './style.css'

function Portfolio() {
  return (
    <>
      <div class="nav-text">
        <h1>Portfolio</h1>
        <div class="row">
            <Card href="https://cil5345.github.io/Weather-App/" src={require("../../images/weatherapp.png")} title="Weather App" description="Weather is very unpredicatable. One minute it can be sunny and then next it can be pouring down
                        rain. Luckily my weather app was created to predict the weather 5 days."/>
            <Card href="https://cil5345.github.io/Stats-On-The-Fly/" src={require("../../images/Stats on the Fly.png")} props="SOTF" description="A NBA sports app that allows user to search favorite NBA player. When searching NBA player user
                        gets NBA stats and a youtube highlight of that player."/>
            <Card href="https://fyre-app.herokuapp.com/" src={require("../../images/fyre.png")} props="Weather App" description="Random song generator to find new songs to add to your playlist. Most have Spotify Premium to use app."/>
           
        </div>
      </div>
    </>
  );
}

export default Portfolio;
