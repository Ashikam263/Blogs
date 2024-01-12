---
title: "Props In React Js"
subtitle: "All you need to know about React JS."
date: "12-02-2023"
---
In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. 

Basically, these props components are read-only components. In ReactJS, the data can be passed from one component to another component using these props, similar to how the arguments are passed in a function. Inside the component, we can add the attributes called props; however, we cannot change or modify props inside the component as they are immutable. 

Get the Coding Skills You Need to Succeed
Full Stack Development-MEANEXPLORE PROGRAM
Using the “this.props”, we can make the props available inside the components. Then, the dynamic data can be rendered through the render method. We need to add the props to the reactDOM.render() in the Main.js file of our ReactJS project of ReactJS if we need immutable data in the component. Then we can use it in the component where we want to use those dynamic data.

Now let us go through an example with code implementation.

## Example:
The code below is the Main.js file. Here, we pass the dynamic data for name attribute within the App component through the render method called reactDOM.render. 

import React from 'react';  

import ReactDOM from 'react-dom';  

import App from './App.js';  

ReactDOM.render(<App name = "World of Programming!" />, document.getElementById('app'));  

The below code is for App.js. Here, we are using the dynamic data for the name attribute which the Main.js file has passed as props, and making the props available within this App component using “this.props”.

import React, { Component } from 'react';  

class App extends React.Component {  

   render() {    

      return (  

          <div>  

            <h1> Welcome to the { this.props.name } </h1>    

            <p> <h4> Here you will get to know so many things and your knowledge will be enhanced . </h4> </p>          

          </div>  

      );  

   }  

}  

export default App;  

## Now let us discuss the default props in ReactJS. 

Default Props in ReactJS
Generally, the default props can be sent directly to the constructor of our component. Thus, the props need to be added to the reactDOM.render by us.

Now let us go through the code implementation of these default props.

Example:
Here in the code below, we can see how the default props are set within App.js.

import React, { Component } from 'react';  

class App extends React.Component {  

   render() {    

      return (  

          <div>  

              <h1>Example for the default props : </h1>  

            <h3>Welcome to the {this.props.name}</h3>  

            <p>Here you will get to know so many things and your knowledge will be enhanced .</p>          

          </div>  

        );  

    }  

}  

App.defaultProps = {  

   name: "World of Programming!"  

}  

export default App;

As shown in the code below, default props do not need to be passed through the render method called reactDOM.render() within the Main.js file of the ReactJS project.

import React from 'react';  

import ReactDOM from 'react-dom';  

import App from './App.js';  

ReactDOM.render(<App/>, document.getElementById('app'));  

Now let us discuss states and props.

Free ReactJS for Beginners Course
Master the Basics of ReactJSSTART LEARNING
State and Props in ReactJS
States are the type of built-in object in ReactJS.

We can create, handle, or manage our data within the component using the state object.Data can be passed by the props but the data cannot be passed by state itself. Using the state, the data is managed internally within the component.

We can combine both the state and props within our application in ReactJS. The steps for this combination process of the states and props within our ReactJS are as follows:

First, the state needs to be set within our parent component.
Then, the state can be passed as the props within the child component.
Now let us see a code implementation for this with an example:

Example:
The code given below is for the App.js file. This code shows how we can set the state in our parent component and then pass it within the child component as the props and use it.

import React, { Component } from 'react';  

class App extends React.Component {  

   constructor(props) {  

      super(props);  

      this.state = {  

         name: "Programming World",        

      }  

   }  

   render() {  

      return (  

         <div>  

            <PW pwProp = {this.state.name}/>            

         </div>  

      );  

   }  

}  

class PW extends React.Component {  

   render() {  

      return (  

          <div>  

              <h1>The example for the combination of states and props within an application.</h1>  

              <h3>Welcome to the this.props.pwProp}</h3>  

              <p>Here you will get to know so many things and your knowledge will be enhanced .</p>  

         </div>    

      );  

   }  

}  

export default App; 

The below code is for the Main.js file of React project:

import React from 'react';  

import ReactDOM from 'react-dom';  

import App from './App.js';  

ReactDOM.render(<App/>, document.getElementById('app'));  

Want a Top Software Development Job? Start Here!
Full Stack Development-MEANEXPLORE PROGRAM
State vs. Props
Let's go through the fundamental differences between state and props:

State
Props
Use Case	State is used to store the data of the components that have to be rendered to the view	Props are used to pass data and event handlers to the children components
Mutability	State holds the data and can change over time	Props are immutable—once set, props can't be changed
Component	State can only be used in class components	Props can be used in both functional and class components
Updation	Event handlers generally update state	The parent component sets props for the children components
And with that, we are now familiar with props, one of the most important concepts of React.

Advance your career as a MEAN stack developer with the Full Stack Web Developer - MEAN Stack Master's Program. Enroll now!
Conclusion
The props objects play a very important role in ReactJs. We can use the dynamic data within our component by passing the attribute through props from one component to another component. As the props are read-only components, the props that we are passing from the parent component cannot be changed in the child component where the data has been passed.

This was all about Props in ReactJS. As you know, these days, along with data structure and algorithms, your development skill is equally crucial to making a mark in the tech industry. Therefore, a techie should always keep himself upgraded and updated with the latest technology and software in the field of Web Development. 