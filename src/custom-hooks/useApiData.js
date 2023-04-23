import { useEffect, useState } from "react";

export const useApiData = async url => {
  const[ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {

    const fetchData =  async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      }catch(e) {
        setIsLoading(false)
        setError(e)
      }
    }

    fetchData()

  }, [url])

  return { data, error, isLoading }

}