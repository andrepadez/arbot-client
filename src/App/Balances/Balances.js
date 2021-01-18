import React, { useState, useEffect } from 'react'

const Balances = ({ socket }) => {
  const [balances, setBalances] = useState([])

  useEffect(() => socket.on('balances', setBalances), [socket])

  return (
    <div className='balances'>
      <h3>Balances:</h3>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(balances).map(key => {
            const bal = balances[key]
            return (
              <tr key={key}>
                <td>
                  <strong>{key}</strong>
                </td>
                <td>{bal}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Balances
