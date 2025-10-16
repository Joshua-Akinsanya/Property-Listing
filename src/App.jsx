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
  
  return (
    <div className="font-display text-white bg-black min-h-screen">
      <HeroSection background={heroImage} />
      <FilterMenu />
      <PropertyList properties={propertyList} />
      <div className="min-h-20"></div>
    </div>
  )
}

export default App