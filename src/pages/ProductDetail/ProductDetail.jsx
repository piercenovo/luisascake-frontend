
import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { useLocation } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import { publicRequest } from '../../redux/api'
import { addProduct } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const ProductDetail = () => {
  const location = useLocation()
  const prod = location.pathname.split('/')[2]

  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [cake_value, setCake] = useState('')
  const [padding_value, setPadding] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('product/get-product/' + prod)
        setProduct(res.data.product)
      } catch {}
    }
    getProduct()
  }, [prod])

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, cake_value, padding_value }))
  }

  // const handleClickFavorite = () => {
  //   dispatch(addProduct({ ...product }))
  // }

  return (
    <>
      <Helmet>
        <title>{product.name_product + ' - Luisa\'s Cake'}</title>
      </Helmet>
      <Breadcrumb
      active
      firstLink={'/categoria/' + product.link_category}
      firstName={product.name_category}
      secondName={product.name_product}
      />
      <ProductInfo key={product.id_product} {...product} handleQuantity={handleQuantity} quantity={quantity} handleClick={handleClick} setCake={setCake} setPadding={setPadding} />
    </>
  )
}

export default ProductDetail
