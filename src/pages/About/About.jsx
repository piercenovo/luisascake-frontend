import { Helmet } from 'react-helmet'
import MissionInfo from '../../components/MissionInfo/MissionInfo'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import HistoryInfo from '../../components/HistoryInfo/HistoryInfo'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - Luisa's Cake</title>
      </Helmet>
      <Breadcrumb
      secondName={'Nosotros'}
      />
      <HistoryInfo />
      <MissionInfo />
    </>
  )
}

export default About
