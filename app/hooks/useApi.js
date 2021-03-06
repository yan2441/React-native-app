import { useState } from "react";


export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const request = async (...args) => {
    //fetch data and control animation
    setLoading(true)
    const response = await apiFunc(...args)
    setLoading(false)
    //handel errors
    setError(!response.ok)
    //set data to state var
    setData(response.data)
    return response
  }

  return {
    data, error, loading, request
  }
}