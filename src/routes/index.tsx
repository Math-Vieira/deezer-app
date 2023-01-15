import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import NotFound from '../pages/NotFound'

const AppRoutes = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
