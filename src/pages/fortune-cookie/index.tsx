import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

import { isEmpty } from 'lodash'
import { Box, useColorMode } from '@chakra-ui/react'

import { buildRequestUrl, getProtocol } from 'utils/fetcher'
import { getTimeTillMidnight, getHoursFromSeconds } from 'utils/dates'
import { truncateText } from 'utils/texts'
import { getRandomInt, scrambleId } from 'utils/randomiser'

import Image from 'next/image'
import { MotionBox, Message, Emoji, ShareIcons } from '@/components'

import { TEXTS } from 'constants/texts'
import { GOLDEN_SHADOW } from 'constants/theme'
import {
  FORTUNE_COOKIE,
  FORTUNE_COOKIES_PATH_COUNT,
  FORTUNE_COOKIES_PATH_ONE,
} from 'constants/locations'

import type { FortuneCookie as FortuneCookieType } from 'types'

const FortuneCookiePage: React.FC = () => {
  const { colorMode } = useColorMode()
  const isLightMode = colorMode === 'light'

  const host = 'localhost:3000'
  const url = 'localhost:3000/fortune-cookie'

  const [isFortuneLoading, setFortuneLoading] = useState(false)
  const [userFortune, setUserFortune] = useState({})

  const [cookies, setCookie] = useCookies([FORTUNE_COOKIE])

  const fortuneCookieId = cookies[FORTUNE_COOKIE]
  const fortuneCrackedBefore = Boolean(fortuneCookieId)

  const timeTillMidnight = getTimeTillMidnight()
  const tillMidnightHours = getHoursFromSeconds(timeTillMidnight)

  const fetchCookie = async (CookieId: number) => {
    const getFortuneUrl = `${getProtocol(
      host as string,
    )}${host}/api${buildRequestUrl(`${FORTUNE_COOKIES_PATH_ONE}${CookieId}`)}`

    const fortune = await fetch(getFortuneUrl, {
      method: 'GET',
    }).then(res => res.json())

    const fortuneCookie = fortune as FortuneCookieType
    setUserFortune(fortuneCookie)
  }

  const useCrackCookie = async () => {
    setFortuneLoading(true)

    const getCountUrl = `${getProtocol(
      host as string,
    )}${host}/api${buildRequestUrl(FORTUNE_COOKIES_PATH_COUNT)}`

    const fortunesAvailableCount = await fetch(getCountUrl, {
      method: 'GET',
    }).then(res => res.json())

    const CookieId = getRandomInt(fortunesAvailableCount as number)
    setCookie(FORTUNE_COOKIE, JSON.stringify(CookieId), {
      maxAge: timeTillMidnight,
    })

    fetchCookie(CookieId)

    setFortuneLoading(false)
  }

  useCrackCookie()

  if (fortuneCrackedBefore && isEmpty(userFortune)) {
    fetchCookie(fortuneCookieId)
  }

  const isLoading =
    isFortuneLoading || (fortuneCrackedBefore && isEmpty(userFortune))

  let truncatedText = ''
  if (!isEmpty(userFortune)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    truncatedText = truncateText({ text: userFortune.text })
  }

  let shareUrl = ''
  const appHostWithProtocol = `${getProtocol(host as string)}${host}`
  const roomUrl = `${appHostWithProtocol}${url}`

  const fortuneId = fortuneCookieId || cookies[FORTUNE_COOKIE]

  if (fortuneId) {
    const scrambledId = scrambleId(fortuneId)
    shareUrl = `${roomUrl}/${scrambledId}`
  }
  // const metaImagePath = `${APP_PRODUCTION}/assets/fortune-room.png`

  return isLoading ? (
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
      <ShareIcons shareUrl={shareUrl as string} truncatedText={truncatedText} />
      <Box
        color={isLightMode ? 'pink' : 'hotpink'}
        sx={{ font: "2rem/4rem 'Caveat', cursiv" }}
        m="20px auto"
        width="fit-content"
      >
        <Emoji label="otter">🦦</Emoji> {TEXTS.fortune_at_midnight}{' '}
        {tillMidnightHours} {TEXTS.hours}{' '}
        <Emoji label="four leaf clover">🍀</Emoji>
      </Box>
    </>
  )
}

export default FortuneCookiePage
