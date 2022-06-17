import Helmet from 'react-helmet'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { BigText, CenterText } from '../styles/globalStyles'

const GiveWithLove = () => {
  return (
    <>
      <Helmet>
        <title>Regala con amor - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Regala con amor'}
      title={'Regala con amor'}
      />
      <CenterText>
      <BigText>Regala con amor</BigText>
    </CenterText>
    </>

  )
}

export default GiveWithLove
