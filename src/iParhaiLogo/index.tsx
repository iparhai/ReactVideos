import React from 'react';
import {
  Sequence,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';
import { Logo } from './Logo';
import { Text } from './Text/Text';
import { ShareButtons } from './ShareButtons';
import { ADD1 } from '../Grade1/Addition_1_Digit/ADD1';
import { EndScreen } from '../EndScreen/EndScreen';


import '../Stylings/Logo.css'

interface DefaultProps {
  titleText: string,
  titleColor: string
}

export function iParhaiLogo(props: DefaultProps) {

  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  const transitionStart = 0;
  return (
    <div className='BackgroundContainer'>
      {/* The Intro to Video */}
      <Sequence from={transitionStart} durationInFrames={50}>
        <div className='CenteredContainer'>
          <Logo />
        </div>
      </Sequence>
      <Sequence from={transitionStart} durationInFrames={50}>
        <div className='GreetingTextHolder'>
          <Text
            titleText={props.titleText} titleColor={props.titleText}
          />
        </div>
      </Sequence>
      <Sequence from={transitionStart} durationInFrames={50}>
        <div className='ShareButtonsHolder'>
          <ShareButtons />
        </div>
      </Sequence>

      {/* The Intro to Topic */}
      <Sequence from={transitionStart+50} durationInFrames={50}>
        <div style={{width : '100%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
          <ADD1 />        
        </div>
      </Sequence>

      {/* End Screen */}
      <Sequence from={transitionStart+100} durationInFrames={Infinity}>
        <div style={{width : '100%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
          <EndScreen />        
        </div>
      </Sequence>

    </div>
  )
} 