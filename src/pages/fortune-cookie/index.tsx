import React, { useState } from 'react'

import Image from 'next/image'

import { MotionBox } from '@/components'

const FortuneCookie: React.FC = () => {
  const [isCracked, crackCookie] = useState(false)

  setTimeout(() => {
    crackCookie(true)
  }, 2000)

  return isCracked ? (
    <div>hello world</div>
  ) : (
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
