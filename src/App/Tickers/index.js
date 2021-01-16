import React, { useState, useEffect } from 'react'
import currency from 'currency.js'
const USD = value =>
  currency(value, { symbol: '$', precision: 4, separator: ',' }).toString()

const Tickers = ({ socket }) => {
  const [ethTickers, setEthTickers] = useState(ETH_PAIRS)
  const [btcTickers, setBtcTickers] = useState(BTC_PAIRS)
  useEffect(() => {
    socket.on('ETH', ticker =>
      setEthTickers(ts => ({ ...ts, [ticker.symbol]: ticker }))
    )
    socket.on('BTC', ticker =>
      setBtcTickers(ts => ({ ...ts, [ticker.symbol]: ticker }))
    )
  }, [socket])

  return (
    <div className='tickers'>
      {Object.keys(ethTickers).map(pair => (
        <div key={pair} className='ticker'>
          <h3>{ethTickers[pair].symbol}</h3>
          <p>${(+ethTickers[pair].bestAsk).toFixed(4)}</p>
        </div>
      ))}
      <hr style={{ width: '100%' }} />
      {Object.keys(btcTickers).map(pair => (
        <div key={pair} className='ticker'>
          <h3>{btcTickers[pair].symbol}</h3>
          <p>${USD(btcTickers[pair].bestAsk)}</p>
        </div>
      ))}
    </div>
  )
}

export default Tickers

const ETH_PAIRS = {
  ETHUSDT: {},
  ETHDAI: {},
  ETHBUSD: {},
  ETHTUSD: {},
  ETHUSDC: {}
}

const BTC_PAIRS = {
  BTCUSDT: {},
  BTCDAI: {},
  BTCBUSD: {},
  BTCTUSD: {},
  BTCUSDC: {}
}
