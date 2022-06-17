import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactanos - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Contactanos'}
      title={'Contactanos'}
      />
      <CenterText>
      <BigText>Contactanos</BigText>
    </CenterText>
    </>

  )
}

export default Contact
