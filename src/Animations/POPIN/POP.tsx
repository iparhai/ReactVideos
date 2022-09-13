import React, {
  useState,
  useEffect
} from 'react';

import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import './style.css'


interface IPop {
  popInText1: string;
  popInText2: string;
  popInText3: string;
  popInText4: string;
}


export const useAppearWithScaleAndBounce = (delay = 0): { scaleValue: number } => {
  const currentFrame = useCurrentFrame();

  const { fps } = useVideoConfig();

  const bounceAnimation = spring({
    frame: currentFrame - delay,
    from: 0,
    to: 1,
    fps,
    config: { damping: 10.5, stiffness: 160, mass: 1 },
  });

  return { scaleValue: bounceAnimation };
};


export function POP(props: IPop) {
  const { scaleValue } = useAppearWithScaleAndBounce();

  let textArray = Object.entries(props).map((key, value) => {
    return key
  })

  console.log(textArray);

  return (
    <div style={{
      alignItems: 'center',
      marginTop: '112px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transform: `scale(${scaleValue})`
    }}
      className='Bounce_Text'
    >
        {
          textArray.map((item,index)=>{
            return <h1>{item[1]}</h1>
          })
        }
    </div >
  )
}
