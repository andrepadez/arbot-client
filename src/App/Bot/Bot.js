import { useState, useEffect } from 'react'

const Bot = ({ socket }) => {
  const [state, setState] = useState({})

  useEffect(() => {
    socket.on('ticker', ticker => setState(ticker))
  })

  const { lastOpPrice, thresh, diff, soldQty } = state

  return (
    <div className='tickers'>
      <div className='ticker'>
        <h4>Last Op Price</h4>
        <p>{lastOpPrice}</p>
      </div>
      <div className='ticker'>
        <h4>threshold</h4>
        <p>{thresh}</p>
      </div>
      <div className='ticker'>
        <h4>diff</h4>
        <p>{diff}</p>
      </div>
    </div>
  )
}

export default Bot
