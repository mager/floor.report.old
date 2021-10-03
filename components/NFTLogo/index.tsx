import React from 'react'
import { Avatar } from 'baseui/avatar'
import { NFT } from '../../types'
import { useStyletron } from 'baseui'

type NFTLogoProps = {
  nft: NFT
}
const NFTLogo = ({ nft }: NFTLogoProps) => {
  // eslint-disable-next-line no-unused-vars
  const [_, theme] = useStyletron()
  return (
    <Avatar name={nft.name} src={nft.imageUrl} size={theme.sizing.scale1000} />
  )
}

export default NFTLogo
