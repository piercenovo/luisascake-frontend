import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const ComplaintsBook = () => {
  return (
    <>
      <Helmet>
        <title>Libro de reclamaciones - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Libro de reclamaciones'}
      title={'Libro de reclamaciones'}
      />
      <CenterText>
      <BigText>Libro de reclamaciones</BigText>
    </CenterText>
    </>

  )
}

export default ComplaintsBook
