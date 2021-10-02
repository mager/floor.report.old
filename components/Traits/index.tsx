import React from 'react'
import { useStyletron } from 'baseui'
import { Trait } from '../../types'
import { ChevronDown, ChevronUp } from 'baseui/icon'
import NFTLogo from '../NFTLogo'
import OpenSeaIcon from '../OpenSeaIcon'

type TraitsProps = {
  traits: Trait[]
}
const Traits = ({ traits }: TraitsProps) => {
  const [css, theme] = useStyletron()

  if (!traits && !traits.length) {
    return <p>No traits found</p>
  }

  return (
    <div>
      {traits.map((trait) => {
        return (
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            })}
          >
            <div>
              {trait.name}: {trait.value}
            </div>
            <div>
              <a href={trait.openSeaURL} target="_blank">
                <OpenSeaIcon />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Traits
