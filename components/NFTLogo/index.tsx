import React from 'react'
import { Avatar } from 'baseui/avatar'
import { NFT } from '../../types'
import { useStyletron } from 'baseui'

type NFTLogoProps = {
  nft: NFT
}
const NFTLogo = ({ nft }: NFTLogoProps) => {
  const [, theme] = useStyletron()
  return (
    <Avatar name={nft.name} src={nft.imageUrl} size={theme.sizing.scale1000} />
  )
}

export default NFTLogo
