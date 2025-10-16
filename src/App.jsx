import { HeroSection, FilterMenu, PropertyList } from "./components/index.js"
import heroImage from './assets/hero-image.jpg'
import { useEffect, useState } from "react"
import { useFetchData } from "./hooks/useFetchData.js"

function App() {
  const [propertyList, setPropertyList] = useState([])

  const data = useFetchData()

  useEffect(() => {
    setPropertyList(data)
  }, [data])

  console.log(propertyList)

  return (
    <div className="font-display text-white bg-darkblue min-h-screen">
      <HeroSection background={heroImage} />
      <FilterMenu />
      <PropertyList />
      {propertyList.map((property) => <p key={property.id}>{property.title}</p>)}
    </div>
  )
}

export default App