import React, {
  useEffect
} from 'react';
import {
  spring,
  useCurrentFrame,
  useVideoConfig
} from 'remotion'

interface ITextProps {
  titleText: string,
  titleColor: string
}

export function Text(props: ITextProps) {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  const { titleText, titleColor } = props;
  const text = titleText?.split('').map((letter) => `${letter}`)



  console.log(frame)
  return (
    <div className='introText'>
      <h1>
        {
          text.map((letter, index) => {
            return <span
              key={index}
              style={{
                color: titleColor,
                marginLeft: 10,
                marginRight: 10,
                transform: `scale(${spring({
                  fps: videoConfig.fps,
                  frame: frame - index * 1,
                  config: {
                    damping: 100,
                    stiffness: 200,
                    mass: 0.5
                  }
                })})`,
                display: 'inline-block',
              }}
            >
              {letter}
            </span>
          })
        }
      </h1>
    </div >
  )
}