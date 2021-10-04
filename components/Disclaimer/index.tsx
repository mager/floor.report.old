import React from 'react'
import { Notification } from 'baseui/notification'
import { useStyletron } from 'baseui'

const Disclaimer = () => {
  const [css] = useStyletron()

  return (
    <Notification
      closeable
      autoHideDuration={10000}
      overrides={{
        Body: { style: { width: 'auto', textAlign: 'center' } },
      }}
    >
      <p
        className={css({
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          lineHeight: '1.5rem',
        })}
      >
        Currently, we only support fetching 50 collections & 250 NFTs. Polygon
        NFTs are not supported yet. Please report any bugs or feature requests
        on{' '}
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
