import { Routes, Route } from 'react-router-dom'
import { Header } from '../components/layouts/Header'
import { Home } from '../pages/Home'
import { Result } from '../pages/Result'
import { NotFound } from '../pages/NotFound'
import { Diagnostic } from '../pages/Diagnostic'
import { Solution } from '../pages/Solution'
import { Footer } from '../components/layouts/Footer'
export const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnostic/:id" element={<Diagnostic />} />
            <Route path="/result" element={<Result />} />
            <Route path="/solution/:id" element={<Solution />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </>
   )
}
