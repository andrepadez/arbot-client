import io from 'socket.io-client'
import Balances from './Balances'
import RsiTrades from './RsiTrades'

import './app.scss'

const { REACT_APP_BACKEND_URI } = process.env

const socket = io(REACT_APP_BACKEND_URI)

function App () {
  return (
    <div className='App'>
      <div className='columns'>
        <Balances socket={socket} />
        <RsiTrades socket={socket} />
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default App

/* 
<header>
  <Filters />
</header>
<Tickers socket={socket} /> 
<Bot socket={socket} />

import Tickers from './Tickers'
import Spinner from 'Components/Spinner'
import Filters from './Filters'
import Bot from './Bot'
*/
