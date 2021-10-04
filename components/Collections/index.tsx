import React from 'react'
import { useStyletron } from 'baseui'
import { Accordion, Panel } from 'baseui/accordion'
import { Block } from 'baseui/block'
import { ChevronDown, ChevronUp } from 'baseui/icon'
import { Collection } from '../../types'
import CollectionLogo from '../CollectionLogo'
import Disclaimer from '../Disclaimer'
import NFTs from '../NFTs'

type CollectionProps = {
  collections: Collection[]
}

const Collections = ({ collections }: CollectionProps) => {
  const [css] = useStyletron()

  return (
    <Block>
      <Block className={css({ textAlign: 'center' })}>
        <Disclaimer />
      </Block>
      <Accordion
        overrides={{
          Header: {
            style: () => ({
              padding: '0.5rem 0',
            }),
          },
          Root: {
            style: () => ({
              padding: 0,
              margin: 0,
            }),
          },
          ToggleIcon: {
            component: ({ $expanded }) =>
              $expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />,
          },
          Content: {
            style: ({ $theme }) => ({
              backgroundColor: $theme.colors.backgroundLightAccent,
              padding: '0.5rem',
            }),
          },
        }}
      >
        {collections.map((collection, i) => (
          <Panel
            key={i}
            title={
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  })}
                >
                  <CollectionLogo collection={collection} />
                  <div
                    className={css({
                      padding: '0 0.5rem',
                    })}
                  >
                    {collection.name}
                  </div>
                </div>
                <div
                  className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  })}
                >
                  {collection.nfts.length * collection.floorPrice}Ξ (x
                  {collection.nfts.length})
                </div>
              </div>
            }
          >
            <NFTs collection={collection} />
          </Panel>
        ))}
      </Accordion>
    </Block>
  )
}

export default Collections
