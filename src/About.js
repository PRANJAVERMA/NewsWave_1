import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";

export default function About() {
    return (

        <div className="about-container">
            <h2>About NewsWave</h2>
            <p>
                <strong>NewsWave</strong> is your go-to app for the latest headlines and in-depth coverage from around
                the world. With a user-friendly interface, you can easily explore news articles from various categories
                such as General, Business, Entertainment, Health, Science, Sports, and Technology.
            </p>
            <p>
                Our app aggregates news from multiple sources, including Google News India, BBC News, and more, to
                provide a diverse range of perspectives. Whether you're interested in Indian news or international
                stories, NewsWave keeps you updated with today's top headlines and yesterday's important events.
            </p>
            <p>
                Stay informed and connected with NewsWave – your window to the world of news!
            </p>
        </div>

    );
}

