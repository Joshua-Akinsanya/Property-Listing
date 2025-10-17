import { HeroSection } from "./components/index.js"
import PropertyMenu from "./components/PropertyMenu.jsx"
import heroImage from './assets/hero-image.jpg'

function App() {
  return (
    <div className="font-display text-white bg-black min-h-screen">
      <HeroSection background={heroImage} />
      <PropertyMenu />
      <div className="min-h-20"></div>
    </div>
  )
}

export default App