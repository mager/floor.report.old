import React from 'react'
import { useStyletron } from 'baseui'

const Totals = ({ info }) => {
  const [css] = useStyletron()

  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem 0.5rem',
        fontWeight: '700',
      })}
    >
      <div>Unrealized Bag 💰</div>
      <div>
        {info.unrealizedBagETH}Ξ ($
        {new Intl.NumberFormat().format(info.unrealizedBagUSD)})
      </div>
    </div>
  )
}

export default Totals
