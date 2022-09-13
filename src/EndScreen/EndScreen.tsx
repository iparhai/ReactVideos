import React from 'react';
import './style.css'

interface IEndScreen {

}

export function EndScreen(props : IEndScreen){
  return(
    <h1 className='EndMessage'>Hope You Enjoyed !</h1>
  )
}