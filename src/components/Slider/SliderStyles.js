import styled from 'styled-components'
import { desktop, laptop, tablet, edesktop } from '../../styles/globalStyles'

export const Container = styled.section`
  width: 100%;
  height: 65vh;
  min-height: 600px;
  display: flex;
  position: relative;
  overflow: hidden;
  ${tablet({ display: 'none' })}
  ${desktop({ height: '30vh', minHeight: '300px' })}
  ${edesktop({ height: '45vh', minHeight: '400px' })}
`

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--light-color);
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom:  0;
  left: ${props => props.direction === 'left' && '1.5rem'};
  right: ${props => props.direction === 'right' && '1.5rem'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`
export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items:center;
  background-color: #${props => props.bg};
  /* ${desktop({ height: '100%' })} */
`
export const ImgContainer = styled.figure`
  height: 100%;
  flex: 1;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding-right: 7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${desktop({ height: '90%' })}
`
export const Image = styled.img`
  height: 100%;
`
export const Title = styled.h1`
  font-size: 7rem;
  text-transform: uppercase;
  color: var(--text-2-color);
  font-family: 'Amatic SC', cursive;
  font-weight: 600;
  ${desktop({ fontSize: '5rem' })}
`
export const Desc = styled.p`
  margin: 1.5rem 0 2.5rem 0;
  font-size: 2.9rem;
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--text-color);
  ${laptop({ fontSize: '2.3rem' })}
`
