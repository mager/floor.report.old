import React from 'react'
import Image from 'next/image'
import { useStyletron } from 'baseui'

const OpenSeaIcon = () => {
  const [_, theme] = useStyletron()
  return <Image src="/opensea-light.svg" height={16} width={16} />
}

export default OpenSeaIcon
