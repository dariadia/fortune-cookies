import React, { useState } from 'react'

import Cookies from 'cookies'

import { isEmpty } from 'lodash'

import { buildRequestUrl, getProtocol } from 'utils/fetcher'
import { descrambleId } from 'utils/randomiser'

import Image from 'next/image'
import { MotionBox, Message } from '@/components'

import { GOLDEN_SHADOW } from 'constants/theme'
import { FORTUNE_COOKIE, FORTUNE_COOKIES_PATH_ONE } from 'constants/locations'

import type { FortuneCookie as FortuneCookieType, FortunePage } from 'types'
import { NextApiRequest, NextApiResponse } from 'next'

const FortuneReadPage: React.FC<FortunePage> = ({
  host,
  fortuneCookie = null,
  fortuneCookieId,
}) => {
  const [userFortune, setUserFortune] = useState(fortuneCookie)

  const fetchCookie = async (CookieId: number) => {
    const getFortuneUrl = `${getProtocol(
      host as string,
    )}${host}/api${buildRequestUrl(`${FORTUNE_COOKIES_PATH_ONE}${CookieId}`)}`

    const fortune = await fetch(getFortuneUrl, {
      method: 'GET',
    }).then(res => res.json())

    const _fortuneCookie = fortune as FortuneCookieType
    setUserFortune(_fortuneCookie)
  }

  if (!fortuneCookieId) return null
  else if (isEmpty(userFortune)) fetchCookie(fortuneCookieId)

  return isEmpty(userFortune) ? (
    <MotionBox
      animate={{ rotate: [-2, 7.3, -8, 0] }}
      transition={{ repeat: 2, duration: 0.3, repeatType: 'reverse' }}
      my={8}
      maxWidth={[240, 'fit-content']}
      mx="auto"
      filter={`drop-shadow(1px 2px 8px ${GOLDEN_SHADOW})`}
    >
      <Image
        src="/assets/fortune-cookie.svg"
        width={400}
        height={400}
        alt="floating fortune cookie"
      />
    </MotionBox>
  ) : (
    <>
      <Message userFortune={userFortune as FortuneCookieType} />
    </>
  )
}

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}): Promise<{ props: FortunePage }> {
  const cookies = new Cookies(req, res)
  const cookieId = descrambleId(cookies.get(FORTUNE_COOKIE) as string)
  const host = req.headers.host

  const fortuneCookie = await fetch(
    `${getProtocol(host as string)}${host}/api${buildRequestUrl(
      `${FORTUNE_COOKIES_PATH_ONE}${cookieId}`,
    )}`,
    {
      method: 'GET',
    },
  ).then(result => result.json())

  return {
    props: {
      host: host as string,
      fortuneCookieId: cookieId,
      fortuneCookie,
    },
  }
}

export default FortuneReadPage
