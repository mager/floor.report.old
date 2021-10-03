import React from 'react'
import { Avatar } from 'baseui/avatar'
import { Collection } from '../../types'
import { useStyletron } from 'baseui'

type CollectionLogoProps = {
  collection: Collection
}
const CollectionLogo = ({ collection }: CollectionLogoProps) => {
  // eslint-disable-next-line no-unused-vars
  const [_, theme] = useStyletron()
  return (
    <Avatar
      name={collection.name}
      src={collection.imageUrl}
      size={theme.sizing.scale1000}
    />
  )
}

export default CollectionLogo
