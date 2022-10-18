import { Helmet } from 'react-helmet'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

import HistoryInfo from '../../features/welcome/components/HistoryInfo/HistoryInfo'
import MissionInfo from '../../features/welcome/components/MissionInfo/MissionInfo'

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
