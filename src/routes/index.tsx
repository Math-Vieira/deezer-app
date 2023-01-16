import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import GlobalContextProvider from '../context/GlobalContext'
import SuspenseRoute from '../helper/functions/suspense-route'
const Favorites = lazy(async () => await import('../pages/Favorites'))
const NotFound = lazy(async () => await import('../pages/NotFound'))
const Home = lazy(async () => await import('../pages/Home'))

const AppRoutes = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={SuspenseRoute(<Home />)} />
            <Route path="/favorites" element={SuspenseRoute(<Favorites />)} />
            <Route path="*" element={SuspenseRoute(<NotFound />)} />
          </Routes>
          <Footer />
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
