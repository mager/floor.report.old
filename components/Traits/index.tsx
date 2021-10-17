import React from 'react'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Trait } from '../../types'
import OpenSeaIcon from '../OpenSeaIcon'

type TraitsProps = {
  traits: Trait[]
}
const Traits = ({ traits }: TraitsProps) => {
  const [css] = useStyletron()

  if (!traits || traits.length === 0) {
    return <p>No traits found</p>
  }

  return (
    <Block>
      {traits.map((trait, i) => {
        return (
          <Block
            key={i}
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            })}
          >
            <Block>
              {trait.name}: {trait.value}
            </Block>
            <Block>
              <a href={trait.openSeaURL} target="_blank" rel="noreferrer">
                <OpenSeaIcon />
              </a>
            </Block>
          </Block>
        )
      })}
    </Block>
  )
}

export default Traits
