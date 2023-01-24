import React, { useEffect } from 'react'

const Head = ({ title }: { title: string }): JSX.Element => {
  useEffect(() => {
    document.title = title
  }, [title])
  return <></>
}

export default Head
