import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'

// Pages
import { Home, About, Shop, CategoryDetail, GiveWithLove, SpecialOrders, Contact, CustomerService, PrivacyPolicies, TermsAndConditions, ComplaintsBook, SignIn, SignUp, Favorites, ShoppingCart, Checkout, Search, ProductDetail, PageNotFound } from './pages/index'

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
      <Header />
        {/* <Suspense fallback={null}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="nosotros" element={<About />} />
            <Route path="tienda" element={<Shop />} />
            <Route path="categoria/:link" element={<CategoryDetail />} />
            <Route path="regala-con-amor" element={<GiveWithLove />} />
            <Route path="pedidos-especiales" element={<SpecialOrders />} />
            <Route path="contactanos" element={<Contact />} />

            <Route path="servicio-al-cliente" element={<CustomerService />} />
            <Route path="politicas-y-privacidad" element={<PrivacyPolicies />} />
            <Route path="terminos-y-condiciones" element={<TermsAndConditions />} />
            <Route path="libro-de-reclamaciones" element={<ComplaintsBook />} />

            <Route path="ingresar" element={<SignIn />} />
            <Route path="crear-cuenta" element={<SignUp />} />
            <Route path="mis-favoritos" element={<Favorites />} />
            <Route path="carrito-de-compras" element={<ShoppingCart />} />
            <Route path="finalizar-compra" element={<Checkout />} />
            <Route path="busqueda" element={<Search />} />
            <Route path="producto/:tag" element={<ProductDetail />} />

            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        {/* </Suspense> */}
      <Footer />

    </Router>
    </>
  )
}

export default App
