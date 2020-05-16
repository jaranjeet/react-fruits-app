import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AllFruits from './AllFruits';
import NewFruit from './NewFruit';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
  }

  componentDidMount() {
    fetch('api/v1/fruits.json').then((response) => {return response.json()}).then((data) => {this.setState({fruits: data})});
  }

  render() {
    return(
      <div>
        <NewFruit />
        <AllFruits fruits={this.state.fruits} />
      </div>
    )
  }
}

export default Body;