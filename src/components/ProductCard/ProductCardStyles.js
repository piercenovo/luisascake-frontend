import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { tablet } from '../../styles/globalStyles'

export const Discount = styled.div`
  position: absolute;
  z-index: 2;
  width: 90%;
  height: 45%;
  right: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background-color: var(--accent-color-3); */
`

export const DiscountSpan = styled.span`
  position: absolute;
  background-color: var(--accent-color-2);
  width: 130%;
  padding: 0.8rem 0;
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20%;
  left: 5%;
  transform: rotate(40deg);
  font-weight: 600;
  font-size: 1.8rem;
`

export const Hover = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  flex-direction: column;
  cursor: pointer;
  padding-top: 5rem;
  padding-right: 3rem;
  padding-bottom: 0;
  padding-left: 3rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
  background-color: var(--light-color);
  position: relative;

  &:hover ${Hover}{
    opacity: 1;
  }
`
export const ImgContainer = styled.figure`
  height: 100%;
  flex: 2;
`
export const InfoContainer = styled.div`
  flex: 1;
  /* padding: 2rem; */
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const Image = styled.img`
  width: 100%;
  z-index: 2;
  
`
export const Title = styled.p`
  color: var(--text-2-color);
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  /* padding-left: 5rem;
  padding-right: 5rem; */
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Span = styled.span`
  color: var(--text-color);
  padding-right: .5rem;
  font-size: 1.38rem;
`
export const Price = styled.span`
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.5rem;
`

export const PreviousPrice = styled.span`
  color: var(--text-color);
  text-decoration: line-through;
  font-weight: 400;
  font-size: 1.4rem;
  padding-left: .3rem;
`

export const PriceDisc = styled.span`
  color: var(--accent-color-1);
  font-weight: 500;
  font-size: 1.5rem;
`

export const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem .7rem;
  transition: all 0.5s ease;

  &:hover {
    background-color: var(--light-color);
    transform: scale(1.1);
  }

  ${tablet({ width: '40px', height: '40px' })}

`

export const LinkCard = styled(Link)`

`
