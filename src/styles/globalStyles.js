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

    *, body, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
      font-size: 54%;
    }

    @media (max-width: 768px){
      font-size: 50%;
    }

    @media (max-width: 576px){
      font-size: 46%;
    }

    @media (max-width: 480px){
      font-size: 42%;
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
    @media only screen and (max-width: 479px){
      ${props} 
    }
  `
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 767px){
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
    @media only screen and (max-width: 1023px){
      ${props} 
    }
  `
}

export const edesktop = (props) => {
  return css`
    @media only screen and (min-width: 1024px) and (max-width: 1200px){
      ${props} 
    }
  `
}

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? 'var(--primary-color)' : '#fff')};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`

export const Heading = styled.h2`
  font-size: 3.2rem;
  margin: ${({ margin }) => (margin || '')};
  margin-bottom: ${({ mb }) => (mb || '')};
  margin-top: ${({ mt }) => (mt || '')};
  color: ${({ inverse }) => (inverse ? 'var(--text-2-color)' : '#fff')};
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width || '100%')};
  font-weight: 500;
  text-transform:  ${({ upper }) => (upper ? 'uppercase' : '')};;
`

export const Subtitle = styled.p`
  font-size: 2rem;
  margin: ${({ margin }) => (margin || '')};
  margin-bottom: ${({ mb }) => (mb || '')};
  margin-top: ${({ mt }) => (mt || '')};
  color: var(--text-color);
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
export const BigText = styled.h1`
  text-align: center;
  font-size: 5.5rem;
  color: var(--primary-color);
`
export const CenterText = styled.div`
  height: 60vh;
  display: grid;
  place-items: center;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  font-size: ${({ fontBig }) => (fontBig ? '2rem' : '1.6rem')};
  text-transform: uppercase;
  padding: ${({ big }) => (big ? '1.2rem 2.1rem' : '.9rem 1.8rem')};
  background: ${({ primary }) => (primary ? 'var(--primary-color)' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'var(--primary-color)')};
  white-space: nowrap;
  outline: none;
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'white' : 'var(--primary-color)')}; 
    color: ${({ primary }) => (primary ? 'var(--primary-color)' : 'white')};
  }
`

export const SecondButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontBig }) => (fontBig ? '2rem' : '1.6rem')};
  text-transform: uppercase;
  padding: ${({ big }) => (big ? '1.2rem 2.1rem' : '.9rem 1.8rem')};
  background: ${({ secondary }) => (secondary ? 'var(--light-color)' : 'white')};
  color: ${({ secondary }) => (secondary ? 'var(--text-color)' : 'var(--primary-color)')};
  white-space: nowrap;
  outline: none;
  border-radius: 5px;
  border: 2px solid var(--light-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'var(--primary-color)' : 'white')}; 
    color: ${({ primary }) => (primary ? 'white' : 'var(--primary-color)')};
  }
`
