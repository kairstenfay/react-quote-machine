import React, { Component } from 'react';
// import * as quoteActions from '../actions/quote';
import Quote from './Quote';
import Author from './Author';



class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
        };
        this.tweetQuote = this.tweetQuote.bind(this);
        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
        this.getQuote();
    }

    componentWillUnmount() {
        return true;
    }

    getQuote() {
        const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

        fetch(url, {cache: "reload"}).then(response => response.json())
            .then(data => {
                let quote = data[0].content.replace(/<\/?[^>]+(>|$)/g, "").trim();
                quote = quote.replace(/;/g, ",");
                quote = quote.replace(/&#8217[;,.]/g, "'");

                this.setState({
                    // TODO: encoding on apostrophe
                    author: data[0].title,
                    quote: quote,
                });
            });
    }

    tweetQuote() {
        let newURL = 'https://twitter.com/intent/tweet?status="' + this.state.quote + '" --' + this.state.author;
        console.log(newURL);
        window.location = newURL;
    }

    render() {
        return (
            <div className="QuoteBox" id="quote-box">
                <h2>Quote:</h2>
                <Quote quote={this.state.quote} />
                <Author author={this.state.author} />
                <button onClick={this.getQuote} id="new-quote">
                    New quote
                </button>
                <button onClick={this.tweetQuote} id="tweet-quote">
                    Tweet quote
                </button>
            </div>

        );
    }
}

export default QuoteBox;