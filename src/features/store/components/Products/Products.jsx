import { ProductsContainer, Wrapper } from '../ProductContent/ProductContentStyles'
// import ProductContent from '../Products/ProductContent/ProductContent'
import SidebarContent from '../SidebarContent/SidebarContent'
import { useState, useEffect, lazy, Suspense } from 'react'
import { publicRequest } from '../../../../redux/api'
import Loading from '../../../../components/Loading/Loading'

const LazyProductContent = lazy(() => import('../ProductContent/ProductContent'))

const Products = ({ cat }) => {
  const [selectedPrice, setSelectedPrice] = useState([10, 1000])
  const handleChangedPrice = (e, value) => setSelectedPrice(value)

  const [products, setProducts] = useState([])
  const [sort, setSort] = useState('default')
  const [searchInput, setSearchInput] = useState('')
  const handleSort = (e, value) => setSort(e.target.value)

  // const [list, setList] = useState(products)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/product/get-products-for-category/${cat}`
            : '/product/get-all-products'
        )
        setProducts(res.data.products)
      } catch (err) {
      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    if (sort === 'desc') {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else if (sort === 'asc') {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    } else if (sort === 'newest') {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.id_product - a.id_product)
      )
    } else {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.id_product - b.id_product)
      )
    }
  }, [sort])

  const applyFilters = () => {
    let updatedList = products

    // Search Products
    if (searchInput) {
      updatedList = updatedList.filter(
        (product) =>
          product.name_product.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
      )
    }

    // Filter Products
    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    )
    setProducts(updatedList)
  }

  useEffect(() => {
    applyFilters()
  }, [searchInput, selectedPrice])

  const handleChangeInput = (e) => setSearchInput(e.target.value)

  return (
    <ProductsContainer>
      <Wrapper>
      <SidebarContent selectedPrice={selectedPrice} changedPrice={handleChangedPrice} changeInput={handleChangeInput} searchInput={searchInput} />
      <Suspense fallback={<Loading />}>
      <LazyProductContent cat={cat} selectedPrice={selectedPrice} handleSort={handleSort} products={products} />
      </Suspense>
      </Wrapper>
    </ProductsContainer>
  )
}

export default Products
