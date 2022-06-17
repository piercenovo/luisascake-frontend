import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const PrivacyPolicies = () => {
  return (
    <>
      <Helmet>
        <title>Políticas y privacidad - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Políticas y privacidad'}
      title={'Políticas y privacidad'}
      />
      <CenterText>
      <BigText>Políticas y privacidad</BigText>
    </CenterText>
    </>

  )
}

export default PrivacyPolicies
