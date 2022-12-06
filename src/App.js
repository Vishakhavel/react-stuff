import { useState, useEffect } from 'react'
import { DEV_API_ENDPOINT } from './urls'
const App = () => {
  const [data, setData] = useState([])
  const [showData, setShowData] = useState(true)
  const [buttonMessage, setButtonMessage] = useState('Hide')

  const handleClick = () => {
    setShowData(!showData)
    setButtonMessage(buttonMessage === 'Hide' ? 'Show' : 'Hide')
  }

  useEffect(() => {
    fetch(DEV_API_ENDPOINT)
      .then((response) => {
        return response.status === 200 ? response.json() : []
      })
      .then((data) => {
        setData(data)
      })
  }, [])
  // dummy
  const element =
    data &&
    data.map((item) => (
      <tr>
        <td>{item.userId}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
      </tr>
    ))
  return (
    <>
      <button onClick={handleClick}>{buttonMessage}</button>
      <table>{showData && element}</table>
    </>
  )
}

export default App
