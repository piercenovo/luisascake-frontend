import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
// import { useLocation } from 'react-router-dom'
import Products from '../../components/Products/Products'

const Shop = () => {
  // const location = useLocation()
  // console.log(location.pathname.split('/')[2])
  return (
    <>
      <Helmet>
        <title>Tienda - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Tienda'}
      title={'Tienda'}
      />
      <Products />
    </>

  )
}

export default Shop
