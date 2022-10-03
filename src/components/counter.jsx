import React, { Component } from "react";
// import List from "./list/List";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement =  this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold",
  //   };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
        {/* <List /> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

// ctrl+D for multi cursor editing
// ctrl+S for using code prettir i.e. code formatting
