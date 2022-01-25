import React from 'react'

import { MotionBox } from '@/components'
import Image from 'next/image'

const FortuneCookie: React.FC = () => {
  return (
    <MotionBox
      animate={{ rotate: [-2, 7.3, -8, 0] }}
      transition={{ repeat: 2, duration: 0.3, repeatType: 'reverse' }}
      my={8}
      maxWidth={[240, 'fit-content']}
      mx="auto"
    >
      <Image
        src="/assets/fortune-cookie.svg"
        width={400}
        height={400}
        alt="floating fortune cookie"
      />
    </MotionBox>
  )
}

export default FortuneCookie
