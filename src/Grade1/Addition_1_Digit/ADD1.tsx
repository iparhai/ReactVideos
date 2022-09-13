import React from 'react';
import {POP} from '../../Animations/POPIN/POP';

interface IADD1{
  
}


export function ADD1(props: IADD1){
  return(
    <div style={{width : '100%'}}>
        <POP
          popInText1='How are you Student'
          popInText2='Today we will Learn How to Count'
          popInText3='Add numbers from 1 to 10'
          popInText4='Lets Start!!!'
        />
    </div>
  )
}