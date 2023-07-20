import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Alert from './components/layouts/Alert'
import Home from './pages/Home'
import About from './pages/About'
import UserPage from './pages/UserPage'
import NotFound from './pages/NotFound'
import { GitProvider } from './context/github/GitContext'
import { AlertProvider } from './context/alert/AlertContext'

// NOTE: Alert is only used on the '/' route moving to that route we can prevent


const App = () =>  {
  return (
    <GitProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route
                  path='/'
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<UserPage />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitProvider>
  )
}

export default App
