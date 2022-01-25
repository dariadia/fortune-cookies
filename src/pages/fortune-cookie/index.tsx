import React from 'react'

import { MotionBox } from '@/components'
import Image from 'next/image'

const FortuneCookie: React.FC = () => {
  return (
    <MotionBox
      animate={{ y: 20, scale: 0.97 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      my={8}
      maxWidth={[240, 320]}
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
