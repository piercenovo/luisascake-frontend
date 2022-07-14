import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../../styles/globalStyles'

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Crear Cuenta - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={'Crear Cuenta'}
      />
      <CenterText>
      <BigText>Crear Cuenta</BigText>
    </CenterText>
    </>

  )
}

export default SignUp
