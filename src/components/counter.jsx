import React, { Component } from "react";

class Counter extends Component {
    state = {
        /* !!! This object will contain ALL the data that this particular component needs !!! */
        count: 0,
    };

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }

    render() {
        /* This method is called every time the component has to be rendered ! */

        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }
}

export default Counter;
