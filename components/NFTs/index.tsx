import React from 'react'
// import { useStyletron } from 'baseui'
// import { Collection } from '../../types'
import { Accordion } from 'baseui/accordion'
// import { Accordion, Panel } from 'baseui/accordion'
import { Block } from 'baseui/block'
import { ChevronDown, ChevronUp } from 'baseui/icon'
// import NFTLogo from '../NFTLogo'
// import Traits from '../Traits'

// type NFTsProps = {
//   collection: Collection
// }
const NFTs = () => {
  // const [css] = useStyletron()

  // if (!collection.nfts || collection.nfts.length === 0) {
  //   return <p>No contract found</p>
  // }

  return (
    <Block>
      <Accordion
        overrides={{
          Root: {
            style: () => ({
              padding: 0,
              margin: 0,
            }),
          },
          Header: {
            style: () => ({
              padding: '0.5rem 0',
              backgroundColor: 'transparent',
            }),
          },
          ToggleIcon: {
            component: ({ $expanded }) =>
              $expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />,
          },
          Content: {
            style: () => ({
              padding: '0.5rem',
            }),
          },
        }}
      >
        {/* {collection.nfts.map((nft, i) => {
          return (
            <Panel
              key={i}
              title={
                <Block
                  className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  })}
                >
                  <Block
                    className={css({
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    })}
                  >
                    <Block
                      className={css({
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      })}
                    >
                      <NFTLogo nft={nft} />
                      <Block
                        className={css({
                          padding: '0 0.5rem',
                        })}
                      >
                        {nft.name}
                      </Block>
                    </Block>
                    <Block>{collection.floorPrice}Ξ</Block>
                  </Block>
                </Block>
              }
            >
              <Traits traits={nft.traits} />
            </Panel>
          )
        })} */}
      </Accordion>
    </Block>
  )
}

export default NFTs
