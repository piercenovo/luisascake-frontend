import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const CustomerService = () => {
  return (
    <>
      <Helmet>
        <title>Servicio al cliente - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Servicio al cliente'}
      title={'Servicio al cliente'}
      />
      <CenterText>
      <BigText>Servicio al cliente</BigText>
    </CenterText>
    </>

  )
}

export default CustomerService
