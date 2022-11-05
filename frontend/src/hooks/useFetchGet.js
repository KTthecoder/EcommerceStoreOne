import React, { useEffect, useState } from 'react'
import GetCookie from '../components/GetCookie'

const useFetchGet = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const csrftoken = GetCookie('csrftoken');
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      }
    })
    .then(res => res.json())
    .then((data) => {
      setData(data)
      setIsLoading(false)
      console.log(data)
    })
    .catch(err => {
      setError(err.message)
      setIsLoading(false)
    })
  }, [url])

  return {data, error, isLoading}
}

export default useFetchGet