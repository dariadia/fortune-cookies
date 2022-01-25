import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { Router } from 'next/router'

import { MotionBox } from '@/components'

const FortuneCookie: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  console.log(loading)

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
