import { Helmet } from 'react-helmet'
import { BigText, CenterText } from '../styles/globalStyles'
// import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros</title>
      </Helmet>
      {/* <BreadCrumb></BreadCrumb> */}
      <CenterText>
      <BigText>Nosotros</BigText>
      </CenterText>
    </>
  )
}

export default About
