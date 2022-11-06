import React, { useEffect, useState } from 'react'
import GetCookie from '../components/GetCookie'

const useFetchGet = (url) => {
    const [data, setData] = useState(null)

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
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [url])

    return {data}
}

export default useFetchGet