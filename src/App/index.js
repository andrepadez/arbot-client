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
      <Bot socket={socket} />
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
