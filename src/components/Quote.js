import React from 'react';

const Quote = function(props) {
    return (
        <p id="text">
          {props.quote}
        </p>
    )
};

export default Quote;