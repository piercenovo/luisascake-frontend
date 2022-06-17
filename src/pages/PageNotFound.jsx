import Helmet from 'react-helmet'
import Error404 from '../components/Error404/Error404'

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada - Luisa's Cake</title>
      </Helmet>
      <Error404 />
    </>

  )
}

export default PageNotFound
