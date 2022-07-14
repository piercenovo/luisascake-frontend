import styled from 'styled-components'
import { mobile } from '../../../styles/globalStyles'

export const TbodyWrapper = styled.tbody`
display: flex;
flex-direction: column;
width: 100%;
`

export const TbodyRow = styled.tr`
display: flex;
width: 100%;
height: 100%;
margin-top: 3rem;
color: var(--text-2-color);

&:last-child {
  margin-bottom: 3rem;
}

`

export const ProductDetail = styled.th`
flex: 3;
width: 100%;
display: flex;

${mobile({ width: '90%', flex: '3.5' })}
`

export const ProductContent = styled.th`
flex: 3;
display: flex;
justify-content: space-around;

${mobile({ flexDirection: 'column', flex: '2', paddingTop: '0' })}
`
export const ProductPrice = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;

`
export const ProductQuantity = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;

`
export const ProductDate = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
color: var(--accent-color-1);
`
export const ProductRemove = styled.div`
flex: 0.5;
display: flex;
align-items: center;
justify-content: center;
`

export const ProductAmount = styled.div`
width: 30px;
height: 30px;
border-radius: 10px;
border: 2px solid var(--accent-color-3);
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
font-weight: 500;
`

export const ImgContainer = styled.figure`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`
export const DetailContainer = styled.div`
flex: 1.2;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
text-align: start;

${mobile({ flex: 1.1 })}
`
export const Image = styled.img`
width: 65%;
`
export const Title = styled.p`
font-size: 1.65rem;
font-weight: 500;
color: var(--text-2-color);

${mobile({ fontSize: '1.55rem' })}
`
