
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrendingNow from './components/TrendingNow'



function App() {
  return (
  <main>
      <div className="container min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <Hero />
        <TrendingNow />
      </div>
    </main>
  )
}

export default App
