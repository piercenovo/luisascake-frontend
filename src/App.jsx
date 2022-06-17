import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Layout
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'

// Pages
import About from './pages/About'
import Shop from './pages/Shop/Shop'
import GiveWithLove from './pages/GiveWithLove'
import SpecialOrders from './pages/SpecialOrders'
import Contact from './pages/Contact'
import CustomerService from './pages/CustomerService'
import PrivacyPolicies from './pages/PrivacyPolicies'
import TermsAndConditions from './pages/TermsAndConditions'
import ComplaintsBook from './pages/ComplaintsBook'
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import ShoppingCart from './pages/ShoppingCart'
import SignIn from './pages/SignIn'
import Cakes from './pages/Shop/Cakes'
import Desserts from './pages/Shop/Desserts'
import Cheesecakes from './pages/Shop/Cheesecakes'
import Snacks from './pages/Shop/Snacks'
import Packs from './pages/Shop/Packs'
import DetailsProduct from './pages/DetailsProduct'
import PageNotFound from './pages/PageNotFound'
import Loading from './components/Loading/Loading'

const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <>
      <Helmet>
        <title>Luisa's Cake - Pastelería y Repostería</title>
        <meta
        name="description"
        content="Siéntete en casa con las recetas de Luisa. Usamos ingredientes seleccionados
        y cuidamos nuestras recetas para mantener la misma calidad y sabor de casa."/>
        <meta name="keyboards" content="Pastelería, Tortas, Postres, Bocaditos, Tienda, Productos, E-commerce"/>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Router>
        <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="tienda" element={<Shop />} />
        <Route path="tienda/:category" element={<Shop />} />
        <Route path="tienda/tortas" element={<Cakes />} />
        <Route path="tienda/postres" element={<Desserts />} />
        <Route path="tienda/cheesecakes" element={<Cheesecakes />} />
        <Route path="tienda/bocaditos" element={<Snacks />} />
        <Route path="tienda/packs" element={<Packs />} />
        <Route path="regala-con-amor" element={<GiveWithLove />} />
        <Route path="pedidos-especiales" element={<SpecialOrders />} />
        <Route path="contactanos" element={<Contact />} />
        <Route path="servicio-al-cliente" element={<CustomerService />} />
        <Route path="politicas-y-privacidad" element={<PrivacyPolicies />} />
        <Route path="terminos-y-condiciones" element={<TermsAndConditions />} />
        <Route path="libro-de-reclamaciones" element={<ComplaintsBook />} />
        <Route path="ingresar" element={<SignIn />} />
        <Route path="mis-favoritos" element={<Favorites />} />
        <Route path="carrito-de-compras" element={<ShoppingCart />} />
        <Route path="busqueda" element={<Search />} />
        <Route path="producto/:id" element={<DetailsProduct />} />

        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
   </Suspense>
    </Router>
    </>
  )
}

export default App
