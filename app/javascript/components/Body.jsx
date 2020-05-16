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
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFruit = this.addNewFruit.bind(this)
  }

  handleFormSubmit(name, description) {
    let body = JSON.stringify({fruit: {name: name, description: description}})

    fetch('/api/v1/fruits', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()}).then((fruit) => {
      this.addNewFruit(fruit)
    })
  }

  addNewFruit() {
    return(
      <div>
        <NewFruit handleFormSubmit={this.handleFormSubmit} />
        <AllFruits fruits={this.state.fruits} />
      </div>
    )
  }
  componentDidMount() {
    fetch('api/v1/fruits.json').then((response) => {return response.json()}).then((data) => {this.setState({fruits: data})});
  }

  render() {
    return(
      <div>
        <NewFruit handleFormSubmit={this.handleFormSubmit}/>
        <AllFruits fruits={this.state.fruits} />
      </div>
    )
  }
}

export default Body;