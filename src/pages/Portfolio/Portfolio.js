import React from "react";
import Card from "../../component/Card";
import './style.css'

function Portfolio() {
  return (
    <>
      <div class="nav-text">
        <h1>Portfolio</h1>
        <div class="row">
            <Card href="https://cil5345.github.io/Weather-App/" src={require("../../images/weatherapp.png")} props="Weather App" description="Weather is very unpredicatable. One minute it can be sunny and then next it can be pouring down
                        rain. Luckily my weather app was created to predict the weather 5 days."/>
            <Card href="https://cil5345.github.io/Weather-App/" src="" props="Weather App" description="Weather is very unpredicatable. One minute it can be sunny and then next it can be pouring down
                        rain. Luckily my weather app was created to predict the weather 5 days."/>
            <Card href="https://cil5345.github.io/Weather-App/" src="" props="Weather App" description="Weather is very unpredicatable. One minute it can be sunny and then next it can be pouring down
                        rain. Luckily my weather app was created to predict the weather 5 days."/>
            <Card href="https://cil5345.github.io/Weather-App/" src="" props="Weather App" description="Weather is very unpredicatable. One minute it can be sunny and then next it can be pouring down
                        rain. Luckily my weather app was created to predict the weather 5 days."/>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
