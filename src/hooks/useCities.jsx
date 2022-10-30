import { useEffect } from "react"
import { useState } from "react"

export const useCities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('https://amazon-api.sellead.com/city')
    .then((response) => response.json())
    .then((data) => setCities(data))
  }, [])
  return {
    cities
  }
}