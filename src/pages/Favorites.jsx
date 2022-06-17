import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const Favorites = () => {
  return (
    <>
      <Helmet>
        <title>Mis favoritos - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Mis Favoritos'}
      title={'Mis Favoritos'}
      />
      <CenterText>
      <BigText>Favoritos</BigText>
    </CenterText>
    </>

  )
}

export default Favorites
