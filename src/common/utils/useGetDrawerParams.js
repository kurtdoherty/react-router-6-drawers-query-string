import { useLocation } from "react-router-dom"

function useGetDrawerParams (params) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  return params.map(param => {
    const value = searchParams.get(param)
    // If the value is an empty string that means it was in the URL but had no value
    if (value === '') return true
    return value
  })
}

export default useGetDrawerParams
