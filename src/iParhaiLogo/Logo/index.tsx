import React from 'react';
import { Favicon } from './Favicon'


export function Logo(){
  return(
    <div className='LogoContainer'>
      <Favicon
        transformY = {0}
      />        
    </div>
  )
}