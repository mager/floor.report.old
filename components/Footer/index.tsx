import React from 'react'
import { Block } from 'baseui/block'
import { Icon } from 'baseui/icon'
import { Grid, Cell } from 'baseui/layout-grid'
import { useStyletron } from 'baseui'

const itemProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Footer = () => {
  const [css] = useStyletron()
  return (
    <Block className={css({ paddingTop: '2rem', textAlign: 'center' })}>
      <Block display="flex" alignItems="center" justifyContent="center">
        <Block className={css({ padding: '0.5rem' })}>
          <Icon
            overrides={{
              Svg: () => (
                <a href="https://discord.gg/7CbtVQYf">
                  <img
                    src={`/discord-light.svg`}
                    width="32"
                    height="32"
                    alt="Discord"
                  />
                </a>
              ),
            }}
          />
        </Block>
        <Block className={css({ padding: '0.5rem' })}>
          <Icon
            overrides={{
              Svg: () => (
                <a href="https://twitter.com/floor_report">
                  <img
                    src={`/twitter-light.svg`}
                    width="32"
                    height="32"
                    alt="Twitter"
                  />
                </a>
              ),
            }}
          />
        </Block>
      </Block>
      <Block>
        Created by <a href="https://twitter.com/mager">@mager</a>
      </Block>
    </Block>
  )
}

export default Footer
