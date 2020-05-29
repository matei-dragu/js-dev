import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log('Counters - rendered')

        // JS object destructuring
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return(
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { counters.map( counter => (
                    <Counter
                        key={counter.id} /* !!! Used internally by React; not accessible inside the component !!! */
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                )) }
            </div>
        );
    }
}

export default Counters;
