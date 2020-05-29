import React, { Component } from "react";

class Counter extends Component {
    state = {
        /* !!! This object will contain ALL the data that this particular component needs !!! */
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags</p>
        }

        return (<ul>
            { this.state.tags.map(value => <li key={value}>{value}</li>) }
        </ul>)
    }

    handleIncrement = () => {
        console.log(this);
        console.log('Increment clicked - arrow function!');

        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        /* This method is called every time the component has to be rendered !
        * !!! Calls to this method will be scheduled for execution every time the state of the component changes !!! */

        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button
                    onClick={ this.handleIncrement /* a method REFERENCE must be passed, not method call !!! */ }
                    className="btn btn-secondary btn-sm">Increment</button>
                { this.renderTags() }
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
