import React from 'react'
import * as s from './Image_css'
import SendImage from './sendImage/sendImage'

export default function Image() {
  return (
    <s.ImageBackground>
      <SendImage />
    </s.ImageBackground>
  )
}
