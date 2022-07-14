import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../../styles/globalStyles'

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Ingresar - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={'Iniciar Sesión'}
      />
      <CenterText>
      <BigText>Ingresar</BigText>
    </CenterText>
    </>

  )
}

export default SignIn
