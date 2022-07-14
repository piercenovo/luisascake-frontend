import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Products from '../../components/Products/Products'

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Tienda - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={'Tienda'}
      />
      <Products />
    </>

  )
}

export default Shop
