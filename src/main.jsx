import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const myvariable = "Hello Friends";
const description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, unde.";
const date = new Date();
const current_date = date.getDate();
const current_manth = date.getMonth();
const current_year = date.getFullYear();

ReactDOM.createRoot(document.getElementById('root')).render(

<div>
  <h1 style={{color : "red"}}>{myvariable}</h1>
  <h2>Welcome</h2>
  <p>{description}</p>
  <p>{current_date + "/" + current_manth + "/" + current_year}</p>
</div>

)
