import React, { useEffect, useState, useContext } from 'react'
import GetCookie from '../components/GetCookie'
import { AuthContext } from '../contexts/AuthProvider.js'

const useFetchGetAuth = (url) => {
    const [data, setData] = useState(null)
    const { authTokens } = useContext(AuthContext)

    useEffect(() => {
      const csrftoken = GetCookie('csrftoken');
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
          'Authorization' : 'Bearer ' + authTokens.access
        }
      })
      .then(res => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }, [url])

    return {data}
}

export default useFetchGetAuth