import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons'
import { useState } from 'react'
import { SMenu, MenuButton, SubRoutesContainer, SubRoute } from './ExpandMenuStyles'

const ExpandMenu = ({ categories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const iconStyle = { color: 'var(--primary-color)', fontSize: '22px' }
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        Tienda {isMenuOpen ? <KeyboardArrowDown style={iconStyle} /> : <KeyboardArrowRight style={iconStyle} />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen} onClick={toggleMenu} >
        {categories.map((category) => (
          <SubRoute to={`/categoria/${category.link_category}`} key={category.id_category}>
            {category.name_category}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  )
}

export default ExpandMenu

// import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons'
// import { useState } from 'react'
// import { SMenu, MenuButton, SubRoutesContainer, SubRoute } from './ExpandMenuStyles'

// const ExpandMenu = ({ route }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const iconStyle = { color: 'var(--primary-color)', fontSize: '22px' }
//   return (
//     <SMenu>
//       <MenuButton onClick={toggleMenu}>
//         {route.name} {isMenuOpen ? <KeyboardArrowDown style={iconStyle} /> : <KeyboardArrowRight style={iconStyle} />}
//       </MenuButton>
//       <SubRoutesContainer isOpen={isMenuOpen}>
//         {route.subRoutes.map((subRoute, index) => (
//           <SubRoute to={subRoute.link} key={index}>
//             {subRoute.name}
//           </SubRoute>
//         ))}
//       </SubRoutesContainer>
//     </SMenu>
//   )
// }

// export default ExpandMenu

// ------------------------------------

// import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons'
// import { useState } from 'react'
// import { SMenu, MenuButton, SubRoutesContainer, SubRoute } from './ExpandMenuStyles'

// const ExpandMenu = ({ id, name, link }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const iconStyle = { color: 'var(--primary-color)', fontSize: '22px' }
//   return (
//     <SMenu>
//       <MenuButton onClick={toggleMenu}>
//         {name} {isMenuOpen ? <KeyboardArrowDown style={iconStyle} /> : <KeyboardArrowRight style={iconStyle} />}
//       </MenuButton>
//       <SubRoutesContainer isOpen={isMenuOpen}>
//           <SubRoute to={link} key={id}>
//             {name}
//           </SubRoute>
//       </SubRoutesContainer>
//     </SMenu>
//   )
// }

// export default ExpandMenu
