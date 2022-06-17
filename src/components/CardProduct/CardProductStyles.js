import styled from 'styled-components'

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
  cursor: pointer;
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
  padding: 2rem;
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
`
export const Span = styled.span`
  color: var(--text-color);
  padding-right: .5rem;
`
export const Price = styled.span`
  color: var(--accent-color-1);
  font-weight: 500;
`

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: var(--light-color);
    transform: scale(1.1);
  }
`
