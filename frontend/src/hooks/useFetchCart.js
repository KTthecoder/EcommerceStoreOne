import React, { useEffect, useState, useContext } from 'react'
import GetCookie from '../components/GetCookie'
import { AuthContext } from '../contexts/AuthProvider.js'

const useFetchCart = () => {
    const [data, setData] = useState(null)
    const { accessToken } = useContext(AuthContext)
    const [total, setTotal] = useState(null)

    useEffect(() => {
        const csrftoken = GetCookie('csrftoken');
        fetch('http://127.0.0.1:8000/api/cart', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
            'Authorization' : 'Bearer ' + accessToken
          }
        })
        .then(res => res.json())
        .then((data) => {
          if(data['Response'] === 'Your Shopping Cart is Empty'){
              setData(null)
              setTotal(0)
          }
          else{
              setData(data)
              setTotal(data[0].order_total)
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    }, [])

    return {data, total}
}

export default useFetchCart