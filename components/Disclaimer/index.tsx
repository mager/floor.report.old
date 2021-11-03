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
        There&rsquo;s currently an issue with OpenSea&rsquo;s API where all
        floor prices are 0. Looking into it...
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
