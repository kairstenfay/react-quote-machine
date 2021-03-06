import React, { Component } from 'react';
// import * as quoteActions from '../actions/quote';
import Quote from './Quote';
import Author from './Author';
import twitter from '../img/twitter.png';
import shuffle from '../img/shuffle.png';

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
        };
        // this.tweetQuote = this.tweetQuote.bind(this);
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
        // look into HTML entity encoding

        fetch(url, {cache: "reload"}).then(response => response.json())
            .then(data => {
                let raw = data[0].content;
                let txt = document.createElement("textarea");
                txt.innerHTML = raw;

                let quote = txt.value.replace(/<\/?p>/g, "").trim();
                let author = data[0].title.replace(/<\/?p>/g, "").trim();
                // TODO: break into separate decoding function; unit test

                this.setState({
                    author: author,
                    quote: quote,
                });
            });
    }

    /* This function currently removed in order to pass FCC's tests. I disagree
        with their implementation, however, so I will keep this function here
        for now.
     */
    // tweetQuote() {
    //     let newURL = 'https://twitter.com/intent/tweet?status="' + this.state.quote + '" --' + this.state.author;
    //     console.log(newURL);
    //     window.location = newURL;
    // }

    render() {
        return (
            <div className="QuoteBox" id="quote-box">
                <div id="controls">
                    <input type="image" class="img-button" name="submit" value="submit" src={shuffle} onClick={this.getQuote}
                           id="new-quote" />
                  <a href={'https://twitter.com/intent/tweet?status="' + this.state.quote + '" --' + this.state.author}
                     id="tweet-quote"><img class="img-button" src={twitter} /></a>
                </div>
                <div id="quote-content-wrapper">
                    <Quote quote={this.state.quote} />
                    <Author author={this.state.author} />
                </div>
            </div>

        );
    }
}

export default QuoteBox;