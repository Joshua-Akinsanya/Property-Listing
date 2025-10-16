import { useState, useEffect } from "react";

function useFetchData() {
  const [data, setData] = useState([])

  const fetchUrl = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json'

  useEffect(() => {
    fetch(fetchUrl).then(res => {
      if(!res.ok) throw new Error(`Response not ok. Status Code ${res.status}`)
      return res.json()
    })
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])
  
  return data
}

export { useFetchData }