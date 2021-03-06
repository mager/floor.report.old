import React from 'react'
import { Notification, KIND } from 'baseui/notification'
import { useStyletron } from 'baseui'

const Disclaimer = () => {
  const [css] = useStyletron()

  return (
    <Notification
      closeable
      kind={KIND.positive}
      autoHideDuration={10000}
      overrides={{
        Body: {
          style: {
            width: 'auto',
            textAlign: 'center',
          },
        },
      }}
    >
      <p
        className={css({
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          lineHeight: '1.5rem',
        })}
      >
        I figured out a new solution for fetching floor prices. If you see a
        floor of -1, come back in about 6 hours and try refreshing. Still need
        to add NFT quantities and the total at the bottom. More updates soon!
        Join our{' '}
        <a
          href="https://discord.gg/MqsRYeQWqa"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>{' '}
        to provide feedback.
      </p>
      <p
        className={css({
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          lineHeight: '1.5rem',
        })}
      >
        Currently, we only support fetching 50 collections & 250 NFTs. Polygon
        NFTs are not supported yet. NFTs without a contract are not supported
        yet. Trait floor prices coming soon. Please report any bugs or feature
        requests on{' '}
        <a
          href="https://github.com/mager/floor.report/issues"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        .
      </p>
    </Notification>
  )
}

export default Disclaimer
