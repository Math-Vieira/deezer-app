import React from 'react'

export interface Props {
  type: string
  value: string
  setValue: (e: string) => void
  label?: string
  id: string
  placeholder: string
}
