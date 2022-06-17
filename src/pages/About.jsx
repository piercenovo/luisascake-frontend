import { Helmet } from 'react-helmet'
import HistorySection from '../components/HistorySection/HistorySection'
import MissionSection from '../components/MissionSection/MissionSection'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      firstLink={'/'}
      firstName={'Home'}
      secondName={'Nosotros'}
      title={'Nosotros'}
      />
      <HistorySection />
      <MissionSection />
    </>
  )
}

export default About
