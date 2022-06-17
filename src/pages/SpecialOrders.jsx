import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const SpecialOrders = () => {
  return (
    <>
      <Helmet>
        <title>Pedidos especiales - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Pedidos especiales'}
      title={'Pedidos especiales'}
      />
      <CenterText>
      <BigText>Pedidos especiales</BigText>
    </CenterText>
    </>

  )
}

export default SpecialOrders
