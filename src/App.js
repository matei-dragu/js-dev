import React, {Component} from 'react';
import NavBar from "./components/navbar";
import './App.css';

import Counters from "./components/counters";

class App extends Component{
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  };

  constructor(props) {
    /* !!! You CAN directly manipulate this.state in the constructor !!! */
    super(props);
    console.log('App - Constructor', this.props)
  }

  componentDidMount() {
    /* Lifecycle hook - called after the component has been rendered into the DOM */
    /* Good place to do AJAX calls and update the state via this.setState(...) using the received data */
    console.log("App - mounted")
  }

  handleIncrement = (counter) => {
    console.log(counter);

    const newCounters = [...this.state.counters]; // cloning an array via the JS spread operator
    const index = newCounters.indexOf(counter)
    newCounters[index] = {...counter}; // cloning an object via the JS spread operator
    newCounters[index].value++;

    this.setState({
      counters: newCounters,
    });
  }

  handleDelete = (counterId) => {
    console.log("COMPONENTS event handler called", counterId)

    /* !!! YOU NEVER UPDATE A COMPONENT'S STATE DIRECTLY !!! */
    /* Instead you use setState(...) and let React manage component state / re-rendering */
    const counters = this.state.counters.filter(
        c => c.id !== counterId
    );

    this.setState({
      counters: counters
    });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({
      counters: newCounters,
    });
  };

  render() {
    /* Lifecycle hook */
    console.log("App - rendered")
    return (
        <React.Fragment>
          <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className="container">
            <Counters
                counters={this.state.counters}
                onReset={this.handleReset /* function reference, NOT function call */ }
                onIncrement={this.handleIncrement /* function reference, NOT function call */ }
                onDelete={this.handleDelete /* function reference, NOT function call */ }
            />
          </main>
        </React.Fragment>
    );
  }
}

export default App;
