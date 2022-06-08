import Helmet from 'react-helmet'
// import { useLocation } from 'react-router-dom'
import Products from '../../components/Products/Products'

const Shop = () => {
  // const location = useLocation()
  // console.log(location.pathname.split('/')[2])
  return (
    <>
      <Helmet>
        <title>Tienda</title>
      </Helmet>
      <Products />
    </>

  )
}

export default Shop
