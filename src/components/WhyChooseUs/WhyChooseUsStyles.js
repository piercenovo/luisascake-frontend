import styled from 'styled-components'
import { mobile, tablet } from '../../styles/globalStyles'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WhyChooseUsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 7rem;
  margin-bottom: 2rem;
  padding: 0rem 5rem;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  /* flex-direction: row; */
  /* margin-top: 4rem;
  flex-wrap: wrap; */
  /* background-color: green; */
  flex-direction: row;

  ${tablet({ alignItems: 'center', flexDirection: 'column' })}
  
`

export const ContentContainer = styled.div`
  width: 60%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: blue; */
  /* flex: 1; */
  margin-bottom: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;

  ${tablet({ padding: '0 5rem 0 5rem', width: '70%' })}
  ${mobile({ width: '100%' })}

`

export const ImgContainer = styled.figure`
  /* width: 100%; */
  height: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InfoContainer = styled.figure`
  width: 100%;
  height: 100%;
  text-align: center;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

`

export const Image = styled.img`
  width: 90%;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));

  ${tablet({ width: '80%' })}

`

export const Title = styled.h3`
  font-size: 3.2rem;
  flex: 1;
  margin-bottom: 2rem;
  color: var(--text-2-color);
  font-weight: 500;
`
export const Desc = styled.p`
  font-size: 1.9rem;
  flex: 2;
  margin-bottom: 1rem;
  color: var(--text-color);

`
