import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Términos y condiciones - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Términos y condiciones'}
      title={'Términos y condiciones'}
      />
      <CenterText>
      <BigText>Términos y condiciones</BigText>
    </CenterText>
    </>

  )
}

export default TermsAndConditions
