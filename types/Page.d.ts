import * as React from 'react'
import { NextPage } from 'next'

import { theme } from 'utils/theme'

import { FortuneCookie, Locale } from '.'

export type Page<T> = NextPage<T> & { Layout?: React.FC }

export interface SinglePage {
  locale?: Locale
  host?: string
  url?: string
}

export interface FortunePage extends SinglePage {
  fortuneCookie?: FortuneCookie
  fortuneCookieId?: number
}

export type Theme = typeof theme

export type WithHost = { host?: string }
