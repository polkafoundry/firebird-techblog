import { useEffect, useState } from "react"
import useSWR, { SWRResponse } from "swr"

const API_BASE_URL = process.env.NEXT_BASE_API

export const fetcher = (url: string, ...args: any) =>
  fetch(url, ...args).then((res) => res.json())

export const useFetch = (url: string, shouldSkip?: boolean, args?: any) => {
  const [response, setResponse] = useState<SWRResponse | null>(null)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(true)

  const {
    data,
    error: fetchError,
    mutate
  } = useSWR(
    shouldSkip
      ? null
      : args
      ? [`${API_BASE_URL}${url}`, args]
      : `${API_BASE_URL}${url}`,
    fetcher
  )

  useEffect(() => {
    setLoading(true)
    setResponse(data)
    if (data) {
      if (data.status >= 400) {
        setError(true)
        setErrorMessage(data.message || "")
      }
      setLoading(false)
    }

    if (fetchError) {
      setError(true)
      setErrorMessage(fetchError.message)
      setLoading(false)
    }

    return function () {
      setLoading(false)
    }
  }, [url, shouldSkip, data, fetchError])

  return { response, loading, error, errorMessage, mutate }
}
