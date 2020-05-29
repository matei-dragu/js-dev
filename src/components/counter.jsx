import React, { Component } from "react";

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        /* Lifecycle Hook */
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('Counter - unmount');
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    render() {
        /* This method is called every time the component has to be rendered !
        * !!! Calls to this method will be scheduled for execution every time the state of the component changes !!! */

        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm">Increment</button>
                <button
                    onClick={ () => {
                        return this.props.onDelete(this.props.counter.id)} }
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }


}

export default Counter;
