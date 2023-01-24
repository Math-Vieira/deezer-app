import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as pt from './pt-BR'
import * as en from './en-US'

export const defaultNS = 'pt_BR'
export const resources = {
  'en-US': en,
  'pt-BR': pt
} as const

void i18n.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  ns: ['pt-BR', 'en-US'],
  defaultNS,
  resources
})
