import React, { useState, useEffect } from 'react'

const RsiTrades = ({ socket }) => {
  const [rsi, setRsi] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => socket.on('rsi', setRsi), [socket])
  useEffect(() => socket.on('btcPrice', setPrice), [socket])

  return (
    <div className='tickers'>
      <div className='ticker'>
        <h5>BTC/USDT RSI</h5>
        <div>{rsi.toFixed(2)}%</div>
      </div>
      <div className='ticker'>
        <h5>BTC/USDT Price</h5>
        <div>${price.toFixed(2)}</div>
      </div>
    </div>
  )
}

export default RsiTrades
