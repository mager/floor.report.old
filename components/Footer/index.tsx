import React from 'react'
import { Block } from 'baseui/block'
import { Icon } from 'baseui/icon'
import { useStyletron } from 'baseui'

const Footer = () => {
  const [css, theme] = useStyletron()
  return (
    <Block
      className={css({
        paddingTop: '2rem',
        textAlign: 'center',
      })}
    >
      <Block display="flex" alignItems="center" justifyContent="center">
        <Block className={css({ padding: '0.5rem' })}>
          <Icon
            overrides={{
              Svg: () => (
                <a
                  href="https://discord.gg/7CbtVQYf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`/discord-${theme.name}.svg`}
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
                <a
                  href="https://twitter.com/floor_report"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`/twitter-${theme.name}.svg`}
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
        Created by{' '}
        <a href="https://twitter.com/mager" target="_blank" rel="noreferrer">
          @mager
        </a>{' '}
        |{' '}
        <a
          href="https://magerleagues.gitbook.io/floor-report/"
          target="_blank"
          rel="noreferrer"
        >
          API
        </a>
      </Block>
    </Block>
  )
}

export default Footer
