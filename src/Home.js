import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure App.css is in the same directory or adjust the path accordingly

export class Home extends Component {
    // Props can be destructured here if you like
    render() {
        const { newsUrl } = this.props; // Assuming newsUrl is the same for all cards; otherwise, consider passing unique URLs for each card

        return (
            <div className='row' id='container'>
                <div className="card" style={{width: '20rem'}}>
                    <img
                        src="/img.png"
                        className="card-img-top"
                        alt="Indian News"
                    />
                    <div className="card-body">
                        <h5 className="card-title">News</h5>
                        <p className="card-text">
                            Indian news covers a wide range of topics from newspapers across India. It includes stories
                            about politics, economy, social issues, culture, and sports. You'll find updates on
                            important events happening all over the country. </p>
                        <Link to="/news-article2" className="btn btn-primary">
                            Read Latest News
                        </Link>
                    </div>
                </div>
                <div className="card" style={{width: '20rem'}}>
                    <img
                        src="/GoogleNews.png"
                        className="card-img-top"
                        alt="Google News"
                    />
                    <div className="card-body">
                        <h5 className="card-title">News</h5>
                        <p className="card-text">
                            Google News provides a broad overview of current events from around the world. It aggregates
                            news articles from all the sources and It helps users stay informed with real-time updates
                            and diverse perspectives.
                        </p>
                        <Link to="/news-article3" className="btn btn-primary">
                            Read Latest News
                        </Link>
                    </div>
                </div>
                <div className="card" style={{width: '20rem'}}>
                    <img
                        src="/internationalNews.png"
                        className="card-img-top"
                        alt="International News"
                    />
                    <div className="card-body">
                        <h5 className="card-title">News</h5>
                        <p className="card-text">
                            International News covers important events and updates from around the globe. It includes
                            news of all categories from various countries. This category helps readers understand what’s
                            happening in different parts of the world.
                        </p>
                        <Link to="/news-article4" className="btn btn-primary">
                            Read Latest News
                        </Link>
                    </div>
                </div>
                <footer>
                    <h6>
                        Built with 💛 by <a href="https://github.com/PRANJAVERMA">PRANJAVERMA</a>
                    </h6>
                </footer>
            </div>
        );
    }
}

export default Home;
// and how it might impact them.
