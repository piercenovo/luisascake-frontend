import { Search } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { publicRequest } from '../../../redux/api'
import FilterProduct from '../../FilterProduct/FilterProduct'
// import { useState } from 'react'
// import { categories } from '../../../data/RoutersData'
import { CategoryContainer, CategoryLink, CategoryTitle, Input, SearchContainer, Sidebar, SidebarWrapper, Title } from './SidebarContentStyles'

const SidebarContent = ({ selectedPrice, changedPrice, changeInput, searchInput }) => {
  // console.log(selectedPrice[0])
  // const [query, setQuery] = useState('')

  // const queryHandler = (e) => {
  //   setQuery(e.target.value)
  //   console.log(query)
  // }

  // const search = (data) => {
  //   return data.filter((item) => item.nameProduct.toLowerCase().includes(query))
  // }s

  const [categories, setCategories] = useState([])
  // const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    publicRequest.get('/category/get-all-categories').then((resp) => {
      setCategories(resp.data.categories)
    })
  }, [])

  // useEffect(() => {
  //   let updatedList = products
  //   if (searchInput) {
  //     updatedList = updatedList.filter(
  //       (item) =>
  //         item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
  //         -1
  //     )
  //   }
  // }, [searchInput])

  return (
    <Sidebar>
      <SidebarWrapper>
      <Title>Buscar Producto</Title>
      <SearchContainer>
        <Input
        type='text'
        placeholder='Buscar productos'
        value={searchInput}
        onChange={changeInput}
        // onChange={queryHandler}
        />
        <Search style={{ fontSize: 20, color: 'var(--accent-color-3)' }} />
      </SearchContainer>
      </SidebarWrapper>
     <SidebarWrapper>
      <FilterProduct value={selectedPrice} changedPrice={changedPrice} />
     </SidebarWrapper>
     <SidebarWrapper>
     <Title>Categorías</Title>
      <CategoryContainer>
      {categories.map((category) => (
          <CategoryLink key={category.id_category} to={`/categoria/${category.link_category}`}>
            <CategoryTitle>{category.name_category}</CategoryTitle>
          </CategoryLink>
      ))}
      </CategoryContainer>
     </SidebarWrapper>
    </Sidebar>
  )
}

export default SidebarContent
