import Helmet from 'react-helmet'
import { useLocation } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Products from '../../features/store/components/Products/Products'

const CategoryDetail = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const helmet = cat[0].toUpperCase() + cat.slice(1)

  return (
    <>
      <Helmet>
        <title>{helmet} - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={cat}
      />
      <Products cat={cat} />
    </>

  )
}

export default CategoryDetail
