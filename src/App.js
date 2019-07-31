import React, { Component } from "react";
import Button from "./components/Button";
import CountDisplay from "./components/CountDisplay";

class App extends Component {
    state = {
        count: 0,
    };

    handleChange = () => {
        this.setState({ ...this.state, count: this.state.count + 1 });
    };

    render() {
        return (
            <>
                <CountDisplay count={this.state.count} />
                <Button onClick={this.handleChange} text='Click me' />
            </>
        );
    }
}

export default App;
