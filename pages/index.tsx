import React, { useCallback, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import Head from 'next/head'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Spinner } from 'baseui/spinner'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'

import { StateType, ActionType } from '../types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
import Totals from '../components/Totals'

const INFURA_ID = '9cc12c897b9e4f88b84f8d0b14ede1d3'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
}

let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  info: null,
  loading: false,
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'START_FETCHING_INFO':
      return {
        ...state,
        loading: true,
      }
    case 'SET_INFO':
      return {
        ...state,
        info: action.info,
        loading: false,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

export const Home = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, info, loading } = state
  const router = useRouter()

  const address = router?.query?.address || state.address
  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleChainChanged = (accounts: string[]) => {
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleDisconnect = () => {
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  const hasCollections = info && info.collections && info.collections.length > 0

  useEffect(() => {
    if (address) {
      const fetchData = async () => {
        dispatch({ type: 'START_FETCHING_INFO' })
        const response = await fetch(`/api/info?address=${address}`)
        const info = await response.json()
        dispatch({
          type: 'SET_INFO',
          info,
        })
      }

      fetchData()
    }
  }, [address])

  const [css, theme] = useStyletron()
  const backgroundColor =
    theme.name === 'dark' ? theme.colors.backgroundAlt : 'transparent'

  return (
    <Block
      className={css({
        padding: '1.5rem 1rem',
        margin: '0 auto',
        maxWidth: '1200px',
        backgroundColor,
      })}
    >
      <Head>
        <title>floor.report</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;400;700&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        web3Provider={web3Provider}
        connect={connect}
        disconnect={disconnect}
        address={address}
        username={info?.username}
        photo={info?.photo}
      />
      <main>
        {loading ? (
          <Block className={css({ textAlign: 'center' })}>
            <Spinner />
          </Block>
        ) : hasCollections ? (
          <>
            <Collections collections={info.collections} />
            {/* <Totals info={info} /> */}
            <Totals />
          </>
        ) : (
          <Block className={css({ textAlign: 'center' })}>
            <p>
              Connecting your wallet is only used to fetch the address, no
              transactions will be made.
            </p>
          </Block>
        )}
      </main>
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Barlow', sans-serif;
          background: ${backgroundColor};
          color: ${theme.name === 'light'
            ? theme.colors.mono900
            : theme.colors.mono100};
        }

        a:visited {
          color: ${theme.colors.accent};
        }

        Block {
          font-family: 'Barlow', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Block>
  )
}

export default Home
