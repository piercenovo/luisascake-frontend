import Helmet from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import FavoriteTable from '../../features/favorites/components/FavoriteContent/FavoriteContent'

const Favorites = () => {
  return (
    <>
      <Helmet>
        <title>Mis favoritos - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={'Mis Favoritos'}
      />
      <FavoriteTable />
    </>

  )
}

export default Favorites
