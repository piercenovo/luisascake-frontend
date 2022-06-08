import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  height: 100vh;
  display: flex;
  align-items:center;
  background-color: #${props => props.bg};
`
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 2rem 7.5rem 2rem 0;
`
export const Image = styled.img`
  height: 80%;
`
export const Title = styled.h1`
  font-size: 4.8rem;
  text-transform: uppercase;
`
export const Desc = styled.p`
  margin: 1.5rem 0 4rem 0;
  font-size: 2.9rem;
  font-weight: 500;
  letter-spacing: 3px;
`
export const Button = styled.button`
align-self: flex-start;
padding: 1rem 1.5rem;
font-weight: 500;
font-size: 1.6rem;
line-height: 18px;
letter-spacing: 1.54px;
cursor: pointer;
background: ${({ inverse }) => (inverse ? 'var(--primary-color)' : 'white')};
color: ${({ inverse }) => (inverse ? 'white' : 'var(--primary-color)')};
border-radius: 4px;
white-space: nowrap;
outline: none;
border: 2px solid var(--primary-color);

&:hover {
  color: ${({ inverse }) => (inverse ? 'var(--primary-color)' : 'white')};
  background: ${({ inverse }) => (inverse ? 'white' : 'var(--primary-color)')};
  transition: all 0.3s ease;
}`
