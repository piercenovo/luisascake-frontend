import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { laptop } from '../../styles/globalStyles'

const move = keyframes`
  0% {
    transform: translateY(-7px);
  }
  50% {
    transform: translateY(12px);
  }
  100% {
    transform: translateY(-7px);
  }
`

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 5rem;
  margin-bottom: 6rem;
  padding: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
export const ImgContainer = styled.figure`
  /* flex: 1; */
  width: 100%;
  max-width: 600px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;


  /* ${laptop({ justifyContent: 'center' })} */
`

export const InfoContainer = styled.div`
  /* flex: 1; */
  /* background-color: green; */
  /* padding-right: 4rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding-bottom: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
`

export const Image = styled.img`
  width: 40%;
  animation: ${move} 2.5s ease infinite;
`

export const Title = styled.h2`
  font-size: 5rem;
  color: var(--text-2-color);
  font-weight: 600;
  padding-bottom: 1.8rem;

`
export const Desc = styled.p`
  padding-bottom: 1.2rem;
  font-size: 1.9rem;
  font-weight: 400;
  color: var(--text-color);
  text-align: justify;
  text-align: center;

  &:first-child{
    background-color: red;
    text-transform: uppercase;
  }

`

export const InfoLink = styled(Link)`
  color: var(--text-color);
  font-weight: 600;
`

export const SearchContainer = styled.div`
  border: .23rem solid transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 1.5rem;
  margin-right: 2rem;
  margin-top: 3rem;
  margin-bottom: 1rem; */
  margin-top: 2rem;
  padding: 0 .5rem;
  background-color: #fbf0f4;
  width: 100%;

  /* &:focus-within{
    border: .23rem solid var(--accent-color-2);
  } */
`
export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 2.2rem;
  padding: 10px 10px;
  background: transparent;
  transition: border-color 0.2s;
  width: 70%;
  color: var(--text-color);
  font-weight: 300;

  &::placeholder{
    color: var(--text-color);
    font-weight: 400;
    text-align: center;
  }
`
