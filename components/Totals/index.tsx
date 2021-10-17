import React from 'react'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'

const Totals = ({ info }) => {
  const [css] = useStyletron()

  return (
    <Block
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem 0.5rem',
        fontWeight: '700',
      })}
    >
      <Block>Unrealized Bag 💰</Block>
      <Block>
        {info.unrealizedBagETH}Ξ ($
        {new Intl.NumberFormat().format(info.unrealizedBagUSD)})
      </Block>
    </Block>
  )
}

export default Totals
