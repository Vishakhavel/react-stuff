import React, { Fragment, useState, useEffect } from 'react'
import { json } from 'react-router-dom'

const ApiFetchComponent = () => {
  const [clicked, setClicked] = useState(false)
  const [items, setItems] = useState([])

  const handleClick = () => {
    console.log('hi there')
    setClicked(!clicked)
  }

  useEffect(() => {
    // effect = API call
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setItems(json))

    // return () => {
    //   // cleanup
    // }
  }, [clicked])

  return (
    <Fragment>
      <button onClick={handleClick}>click for magic</button>
      <p>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
      </p>
    </Fragment>
  )
}

export default ApiFetchComponent

// https://mocki.io/v1/0b3454f2-8dd5-4ecd-a0b2-f76ac833409d
