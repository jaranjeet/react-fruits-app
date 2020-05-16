import React from 'react';
import ReactDOM from 'react-dom';

const NewFruit = (props) => {
  let formFields = {}

  return(
    <form onSubmit={ (e) => {
      e.preventDefault();
      props.handleFormSubmit(
        formFields.name.value,
        formFields.description.value
      );
      e.target.reset();}
      }
    >
      <input ref={input => formFields.name = input} placeholder='Enter the name of the fruit' />
      <input ref={input => formFields.description = input} placeholder='Enter a description' />
      <button>Submit</button>
    </form>
  )
}

export default NewFruit;