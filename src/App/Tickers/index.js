const Tickers = ({ tickers }) => {
  return (
    <div className='tickers'>
      {Object.keys(tickers).map(pair => (
        <div key={pair} className='ticker'>
          <h3>{tickers[pair].symbol}</h3>
          <p>${(+tickers[pair].bestAsk || 0).toFixed(4)}</p>
        </div>
      ))}
    </div>
  )
}

export default Tickers
