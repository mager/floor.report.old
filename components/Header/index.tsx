import React from 'react'
import { useStyletron, styled } from 'baseui'
import { Button } from 'baseui/button'
import { ellipseAddress } from '../../lib/utilities'

const ConnectButton = styled(Button, ({ $theme }) => ({
  height: $theme.sizing.scale600,
}))

const Header = ({ address, web3Provider, connect, disconnect }) => {
  const [css, theme] = useStyletron()

  return (
    <header
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
      })}
    >
      <h1
        className={css({
          color: theme.colors.primary,
          fontSize: theme.sizing.scale1000,
          letterSpacing: '-0.03em',
          fontFamily: 'Special Elite',
        })}
      >
        floor.report
      </h1>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <p
          className={css({
            fontSize: theme.sizing.scale500,
          })}
        >
          {ellipseAddress(address)}
        </p>
        {!web3Provider ? (
          <ConnectButton onClick={connect}>
            <span
              className={css({
                fontSize: theme.sizing.scale500,
                letterSpacing: '-0.03em',
              })}
            >
              Connect Wallet
            </span>
          </ConnectButton>
        ) : (
          <ConnectButton onClick={disconnect}>
            <span
              className={css({
                fontSize: theme.sizing.scale500,
                letterSpacing: '-0.03em',
              })}
            >
              Logout
            </span>
          </ConnectButton>
        )}
      </div>
    </header>
  )
}

export default Header
