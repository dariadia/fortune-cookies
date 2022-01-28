import React from 'react'

type Props = {
  label: string
  className?: string
}

export const Emoji: React.FC<Props> = ({ children, label, className }) => (
  <span role="img" aria-label={label} className={className} title={label}>
    {children}
  </span>
)
