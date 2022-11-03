import React, { useEffect, useState } from 'react'
import GetCookie from '../components/GetCookie'

const useFetch = (url) => {
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
      console.log(err.message)
    })
  }, [url])

  return {data, error, isLoading}
}

export default useFetch