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
            category: 'general'
        };
    }

    // Method to fetch news based on category
    fetchNews = async (category) => {
        const apiKey = 'cea980577d7a470b87e600af666fdfda';
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

        try {
            const response = await axios.get(url);
            const allArticles = response.data.articles;

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
            console.error("Error fetching the news", error);
            this.setState({ loading: false, error: 'Error fetching the news' });
        }
    };

    // Handle category button click
    handleCategoryChange = (category) => {
        this.setState({ loading: true, category }, () => {
            this.fetchNews(category);
        });
    };

    // Fetch news when the component mounts
    componentDidMount() {
        this.fetchNews(this.state.category);
    }

    render() {
        const { articles, loading, error, category } = this.state;

        return (
            <div className="container my-3">
                <h2>NewsWave - Top Headlines</h2>
                <div className="btn-group" role="group" aria-label="Categories">
                    <button type="button" className={`btn btn-primary ${category === 'general' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('general')}>General</button>
                    <button type="button" className={`btn btn-secondary ${category === 'business' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('business')}>Business</button>
                    <button type="button" className={`btn btn-warning ${category === 'entertainment' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('entertainment')}>Entertainment</button>
                    <button type="button" className={`btn btn-info ${category === 'health' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('health')}>Health</button>
                    <button type="button" className={`btn btn-dark ${category === 'science' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('science')}>Science</button>
                    <button type="button" className={`btn btn-danger ${category === 'sports' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('sports')}>Sports</button>
                    <button type="button" className={`btn btn-success ${category === 'technology' ? 'active' : ''}`} onClick={() => this.handleCategoryChange('technology')}>Technology</button>
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
