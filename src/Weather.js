import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <section className="today">
          <div className="first-card">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <h1>
                    <div>23rd November, 2022</div>
                  </h1>

                  <h2>Abuja</h2>
                  <div>12:00pm</div>
                </div>

                <div className="col-8">
                  🌅
                  <img src="/" alt="sunny" />
                  <span>29°C</span>
                  <a href="/" id="celsius-link" class="active">
                    °C
                  </a>{" "}
                  |
                  <a href="/" id="farenheit-link">
                    °F
                  </a>
                  <div>30°C</div>
                </div>
                <h3>
                  <span>sunny</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="more-info">
          <div className="second-card">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <strong>Wind</strong>
                  <div>5km/hr</div>
                </div>
                <div className="col-4">
                  <strong> Humidity </strong>
                  <div>88</div>
                </div>
                <div className="col-4">
                  <strong> Pressure </strong>
                  <div>1000mb</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form className="form" action="search">
          <input
            class="entercity"
            type="text"
            placeholder="enter city name..."
            autocomplete="off"
            autofocus
          />
          <input className="search" type="submit" value="search" />
        </form>

        <div className="five">5 Day Forecast</div>
        <hr />

        <section className="prediction">
          <div className="row">
            <div className="col">Monday <br /> 20°C</div>
            <div className="col">Tuesday <br /> 20°C</div>
            <div className="col">Wednesday <br /> 20°C</div>
            <div className="col">Thursday <br /> 20°C</div>
            <div className="col">Friday <br /> 20°C</div>
          </div>
        </section>
      </div>

      <footer>
        <a href="https://github.com/Oseni-Ella/my-weather-app">
          Open-source code
        </a>
        by OSENI EMMANUELLA
      </footer>
    </div>
  );
}
