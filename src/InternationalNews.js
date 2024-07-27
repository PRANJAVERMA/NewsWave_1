import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            error: null,
            category: '',  // No initial category
        };
    }

    // Method to fetch news based on category
    fetchNews = async () => {
        const apiKey = 'cea980577d7a470b87e600af666fdfda';
        const { category } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`; // Use country code for global news

        if (category) {
            url += `&category=${category}`;
        }

        try {
            const response = await axios.get(url);
            const allArticles = response.data.articles;

            // Filter articles to show only today's and yesterday's news
            const filteredArticles = allArticles.filter(article => {
                const articleDate = new Date(article.publishedAt);
                const today = new Date();
                const yesterday = new Date();
                yesterday.setDate(today.getDate() - 1);

                return (
                    articleDate.toDateString() === today.toDateString() ||
                    articleDate.toDateString() === yesterday.toDateString()
                );
            });

            this.setState({ articles: filteredArticles, loading: false });
        } catch (error) {
            console.error("Error fetching the news", error.response ? error.response.data : error.message);
            this.setState({ loading: false, error: 'Error fetching the news' });
        }
    };

    // Handle category button click
    handleCategoryChange = (category) => {
        this.setState({ loading: true, category: category }, this.fetchNews);
    };

    // Fetch news when the component mounts
    componentDidMount() {
        this.fetchNews();
    }

    render() {
        const { articles, loading, error, category } = this.state;

        return (
            <div className="container my-3">
                <h2>NewsWave - Top Headlines</h2>

                <div className="btn-group my-3" role="group" aria-label="Categories">
                    <button type="button" className={`btn btn-primary ${category === '' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('')}>All</button>
                    <button type="button" className={`btn btn-secondary ${category === 'business' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('business')}>Business</button>
                    <button type="button" className={`btn btn-success ${category === 'entertainment' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('entertainment')}>Entertainment</button>
                    <button type="button" className={`btn btn-danger ${category === 'health' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('health')}>Health</button>
                    <button type="button" className={`btn btn-info ${category === 'science' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('science')}>Science</button>
                </div>

                {loading && <h3>Loading...</h3>}
                {error && <h4>{error}</h4>}
                {!loading && !error && (
                    <div className='row'>
                        {articles.length > 0 ? (
                            articles.map((element) => (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title || "No Title"}
                                        description={element.description || " "}
                                        imgUrl={element.urlToImage || "/News_img.png"}
                                        newsUrl={element.url}
                                    />
                                </div>
                            ))
                        ) : (
                            <h4>No news available for this category</h4>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default News;
