import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import Header from './Components/Header/Header'
import TimeCounter from './Components/TimeCounter/TimeCounter'
import './App.css'
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <div>
      <Header />
      <PhotoGallery />
      <TimeCounter />
      <WhatsAppButton />
    </div>
  )
}

export default App
