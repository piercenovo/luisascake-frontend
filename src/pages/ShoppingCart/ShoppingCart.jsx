import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import CartTable from '../../features/cart/components/CartTable/CartTable'

const ShoppingCart = () => {
  return (
    <>
      <Helmet>
        <title>Carrito de Compras - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={'Carrito de Compras'}
      />
     <CartTable />
    </>

  )
}

export default ShoppingCart
