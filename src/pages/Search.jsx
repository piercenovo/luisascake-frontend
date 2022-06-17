import Helmet from 'react-helmet'
import { BigText, CenterText } from '../styles/globalStyles'

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Búsqueda - Luisa's Cake</title>
      </Helmet>
      <CenterText>
      <BigText>Búsqueda</BigText>
    </CenterText>
    </>

  )
}

export default Search
