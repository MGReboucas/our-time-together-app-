import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import Header from './Components/Header/Header'
import TimeCounter from './Components/TimeCounter/TimeCounter'
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton'
import LoveMessage from './Components/LoveMessage/LoveMessage'
import RelationshipQuiz from './Components/RelationshipQuiz/RelationshipQuiz'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <PhotoGallery />
      <TimeCounter />
      <WhatsAppButton />
      <RelationshipQuiz />
      <LoveMessage />
    </div>
  )
}

export default App
