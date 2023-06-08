import { useState } from 'react'
import React from 'react'
import './App.css'
import { useState } from 'react'
import filmData from "film-data.json"





function App() {
    return (
      <div>
        <h1>SlideShow</h1>
        {filmData.map((film) => (
            <filmInfo film={film} />
          ))}
      </div>
    );
  }
  


function filmInfo(props){
    const
}