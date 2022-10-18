import styled from 'styled-components'
import { desktop, edesktop } from '../../../../styles/globalStyles'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OffersWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 7rem;
  margin-bottom: 2rem;
  padding: 0rem 5rem;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 4rem;
  flex-wrap: wrap;

  ${edesktop({ justifyContent: 'center' })}
  ${desktop({ justifyContent: 'center' })}
  
`
