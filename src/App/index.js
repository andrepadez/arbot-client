import io from 'socket.io-client'
import Balances from './Balances'
import Bot from './Bot'
import './app.scss'

const { REACT_APP_BACKEND_URI } = process.env

const socket = io(REACT_APP_BACKEND_URI)

function App () {
  return (
    <div className='App'>
      <Balances socket={socket} />
      <div className='columns'>
        <div></div>
        <Bot socket={socket} />
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

import Tickers from './Tickers'
import Spinner from 'Components/Spinner'
import Filters from './Filters'
*/
