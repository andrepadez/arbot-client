import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Tickers from './Tickers'
import Spinner from 'Components/Spinner'
import Filters from './Filters'
import './app.scss'

const { REACT_APP_BACKEND_URI } = process.env

const socket = io(REACT_APP_BACKEND_URI)

function App () {
  const [loading, setLoading] = useState(0)
  const [tickers, setTickers] = useState(PAIRS)
  useEffect(() => {
    socket.on('ticker', ticker => {
      setTickers(ts => ({ ...ts, [ticker.symbol]: ticker }))
      setLoading(l => l + 1)
    })
    // socket.on('ticker-list', list => {})
  }, [])

  return (
    <div className='App'>
      {loading < 1 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <header>
            <Filters />
          </header>
          <Tickers tickers={tickers} />
        </div>
      )}
    </div>
  )
}

export default App

const PAIRS = {
  BTCUSDT: {},
  ETHUSDT: {},
  ADAUSDT: {},
  DOTUSDT: {},
  LINKUSDT: {},
  VETUSDT: {},
  XRPUSDT: {}
}
