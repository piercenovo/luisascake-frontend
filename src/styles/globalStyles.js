import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    :root {
        --text-color: #823C1C;
        --text-2-color: #532611;

        --primary-color: #EF8084;
        --secondary-color: #532611;

        --accent-color-1: #E45C6A;
        --accent-color-2: #F18E9F;
        --accent-color-3: #F6B4BF;
        --accent-color-4: #E3BCDA;

        --light-color: #FDEBEB;
        --white-color: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html {
      scrollbar-width: normal;
      scrollbar-color: var(--accent-color-3) var(--light-color);
    }

    html, body{
    font-family: 'Montserrat', sans-serif;
    background: var(--mainColor);
    color: var(--textColor);
    font-size: 60%;

    @media (max-width: 968px){
      font-size: 55%;
    }

    @media (max-width: 768px){
      font-size: 52%;
    }

    @media (max-width: 576px){
      font-size: 50%;
    }

    @media (max-width: 480px){
      font-size: 45%;
    }
    }

    body{
      font-size: 1.6rem;
    }

    a{
      text-decoration: none;
      color: var(--text-2-color);
    }

    ::selection {
    background: var(--accent-color-2);
    color: white;

    ::-moz-selection {
      background: var(--accent-color-2);
    color: white;
  }
}
`

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px){
      ${props} 
    }
  `
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 768px){
      ${props} 
    }
  `
}

export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 968px){
      ${props} 
    }
  `
}

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1024px){
      ${props} 
    }
  `
}

export const ContainerGlobal = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-top: 6rem;
    margin-bottom: 5rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0 100px;

    ${tablet({ padding: '0 50px' })}
`

export const MainHeading = styled.h1`
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 2rem;
    color: ${({ inverse }) => (inverse ? 'var(--primary-color)' : '#fff')};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
`

export const Heading = styled.h2`
    font-size: clamp(1rem, 12vw, 3.3rem);
    margin: ${({ margin }) => (margin || '')};
    margin-bottom: ${({ mb }) => (mb || '')};
    margin-top: ${({ mt }) => (mt || '')};
    color: ${({ inverse }) => (inverse ? 'var(--secondary-color)' : '#fff')};
    line-height: 1.06;
    text-align: center;
    width: ${({ width }) => (width || '100%')};
    font-weight: 500;
`

export const Subtitle = styled.p`
    font-size: clamp(1rem, 4vw, 2.2rem);
    margin: ${({ margin }) => (margin || '')};
    margin-bottom: ${({ mb }) => (mb || '')};
    margin-top: ${({ mt }) => (mt || '')};
    color: var(--secondary-color);
    line-height: 1.06;
    text-align: center;
    width: ${({ width }) => (width || '100%')};
    font-weight: 400;
`

export const TextWrapper = styled.span`
    color: ${({ color }) => (color || '')};
    font-size: ${({ size }) => (size || '')};
    font-weight: ${({ weight }) => (weight || '')};
    letter-spacing: ${({ spacing }) => (spacing || '')};
    padding: ${({ padding }) => (padding || '')};
    margin: ${({ margin }) => (margin || '')};
    margin-bottom: ${({ mb }) => (mb || '')};
    margin-top: ${({ mt }) => (mt || '')};
    color: var(--secondary-color);
`
export const Section = styled.section`
    padding: ${({ padding }) => (padding || '140px 0')};
    margin: ${({ margin }) => (margin || '')};
    background: ${({ inverse }) => (inverse ? 'white' : 'var(--light-color)')};
    position: ${({ position }) => (position || '')};
    width: ${({ width }) => (width || 'auto')};
    min-width: ${({ minWidth }) => (minWidth || 'auto')};
    max-width: ${({ maxWidth }) => (maxWidth || 'auto')};
    height: ${({ height }) => (height || 'auto')};
    max-height: ${({ maxHeight }) => (maxHeight || 'auto')};
    min-height: ${({ minHeight }) => (minHeight || 'auto')};

    @media screen and (max-width: 768px) {
      padding: ${({ smPadding }) => (smPadding || '70px 0')};
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: ${({ justify }) => (justify || '')};
    align-items: ${({ align }) => (align || '')};
    gap: ${({ gap }) => (gap || '')};
    padding: ${({ padding }) => (padding || '')};
    margin: ${({ margin }) => (margin || '')};
    position: ${({ position }) => (position || '')};
    width: ${({ width }) => (width || 'auto')};
    min-width: ${({ minWidth }) => (minWidth || 'auto')};
    max-width: ${({ maxWidth }) => (maxWidth || 'auto')};
    height: ${({ height }) => (height || 'auto')};
    max-height: ${({ maxHeight }) => (maxHeight || 'auto')};
    min-height: ${({ minHeight }) => (minHeight || 'auto')};
    flex-wrap: ${({ wrap }) => (wrap || '')};
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({ justify }) => (justify || '')};
    align-items: ${({ align }) => (align || '')};
    gap: ${({ gap }) => (gap || '')};
    padding: ${({ padding }) => (padding || '')};
    margin: ${({ margin }) => (margin || '')};
    position: ${({ position }) => (position || '')};
    width: ${({ width }) => (width || 'auto')};
    min-width: ${({ minWidth }) => (minWidth || 'auto')};
    max-width: ${({ maxWidth }) => (maxWidth || 'auto')};
    height: ${({ height }) => (height || 'auto')};
    max-height: ${({ maxHeight }) => (maxHeight || 'auto')};
    min-height: ${({ minHeight }) => (minHeight || 'auto')};
`

export const Button = styled.button`
  align-self: flex-start;
  padding: .6rem 1.2rem;
  font-weight: 500;
  font-size: 1.4rem;
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
  }
`

export const BigText = styled.h1`
  text-align: center;
  font-size: 5.5rem;
  color: var(--primary-color);
`

export const CenterText = styled.div`
  height: 90vh;
  display: grid;
  place-items: center;
`
