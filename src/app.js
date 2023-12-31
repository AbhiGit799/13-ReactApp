import react from "react";
import { Component } from "react";
import reactDOM from "react-dom/client";
import AppStyle from "./app.module.css";  
import cx from "classnames";

import styled from "styled-components"; //third party

// const Button = ({type,text})=>{
//     return(<>
    
//     {/* <button type="button" className={cx(AppStyle.button)}>{text}</button> */}

//     <button type="button" className={cx(AppStyle[type],AppStyle.custmargin)}>{text}</button>
    
//     </>)
// }

// export function App()
// {
//     return(<>
    
//     <Button type="save" text="Register"/> 
           
//     <Button type="danger" text="Delete"/>

//     </>)
// }


// const Button = styled.button`
// cursor: pointer;
// background: transparent;
// font-size: 16px;
// border-radius: 3px;
// color: palevioletred;
// border: 2px solid palevioletred;
// margin: 0 1em;
// padding: 0.25em 1em;
// transition: 0.5s all ease-out;
// &:hover {
//   background-color: palevioletred;
//   color: white;
// }
// `;


// export function App()
// {
//     return(<>
//     <Button> Save </Button> 
//     </>)
// }




// const Button = styled.button`
// cursor: pointer;
// background: transparent;
// font-size: 16px;
// border-radius: 3px;
// color: ${(props)=>props.isGold?'palevioletred':'blue'};
// border: ${(props)=>props.isGold?'2px solid palevioletred':'2px solid blue'};
// margin: 0 1em;
// padding: 0.25em 1em;
// transition: 0.5s all ease-out;
// &:hover {
//   background-color: ${(props)=>props.isGold?'palevioletred':'blue'};
//   color: white;
// }
// `;


// export function App()
// {
//     return(<>
//     <Button isGold > Gold Plan </Button> 
//     <Button isGold={false}> Silver Plan </Button> 
//     </>)
// }



// import "./app.scss"
// export function App()
// {
//     return(<>
     
//      <h1>Hello TechWorld!!</h1>
//      <h2>Hello IT World!!</h2>
//      <h3>Hello Ang!!</h3>

//     </>)
// }


// SCSS Bootstrap

// import "./app.scss"
// export function App()
// {
//     return(<>
     
//    <button type="button" className="btn btn-primary">Save</button>
//    &nbsp;
//    <button type="button" className="btn btn-secondary">Update</button>
//    &nbsp;
//    <button type="button" className="btn btn-danger">Delete</button>


//     </>)
// }


// CSS Bootstrap

// import "./app.css"
// export function App()
// {
//     return(<>
     
//    <button type="button" className="btn btn-primary me-1">Save</button>
   
//    <button type="button" className="btn btn-secondary me-1">Update</button>
   
//    <button type="button" className="btn btn-danger me-1">Delete</button>

//    <br /> <br/>

//     <div className="alert alert-primary" role="alert">
//     A simple primary alert—check it out!
//     </div>

//     <div className="alert alert-secondary" role="alert">
//     A simple secondary alert—check it out!
//     </div>
//     <div className="alert alert-success" role="alert">
//     A simple success alert—check it out!
//     </div>
//     <div className="alert alert-danger" role="alert">
//     A simple danger alert—check it out!
//     </div>
//     <div className="alert alert-warning" role="alert">
//     A simple warning alert—check it out!
//     </div>
//     <div className="alert alert-info" role="alert">
//     A simple info alert—check it out!
//     </div>
//     <div className="alert alert-light" role="alert">
//     A simple light alert—check it out!
//     </div>
//     <div className="alert alert-dark" role="alert">
//     A simple dark alert—check it out!
//     </div>


//     </>)
// }



import "./app.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faTrashCan,faEdit} from "@fortawesome/free-regular-svg-icons"

import {faTrash,faAdd} from "@fortawesome/free-solid-svg-icons";

// export function App()
// {
//     return(<>
//     <h1>Hello React!!</h1>
//     <hr />
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, aspernatur. Itaque veritatis quam quidem provident rerum necessitatibus, a nisi, quo, alias molestias laboriosam et aspernatur distinctio velit adipisci perspiciatis sed.</p>
//     <br /><br />

//     {/* <FontAwesomeIcon/> */}

//    <FontAwesomeIcon icon={faTrashCan}/> &nbsp;

//    <FontAwesomeIcon icon={faTrash}/> &nbsp;

//    <button> Edit <FontAwesomeIcon icon={faEdit}/> </button> &nbsp;

//    <button> ADD <FontAwesomeIcon icon={faAdd}/> </button>

//     </>)
// }


//Package Issue
// import Button from "@mui/material/Button";

// export function App()
// {
//     return(<>
//     <Button variant='contained'>SAVE</Button>
//     </>)
// }


export function App()
{
    return(<>
    <h1>I am fine 👍 </h1>
    </>)
}




