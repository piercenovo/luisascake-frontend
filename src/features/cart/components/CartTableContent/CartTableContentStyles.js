import styled from 'styled-components'
import { laptop, tablet } from '../../../../styles/globalStyles'

export const TbodyWrapper = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3.5rem;

  &:last-child{
    margin-bottom: 3.5rem;
  }
`

export const TbodyRow = styled.tr`
  display: flex;
  width: 100%;
  color: var(--text-2-color);
  align-items: center;
  justify-content: center;

  ${tablet({ flexDirection: 'column' })}
`

export const ProductDetail = styled.th`
  flex: 3;
  display: flex;
  ${tablet({ width: '90%' })}
`

export const ProductContent = styled.th`
  flex: 3.5;
  padding-top: 1.5rem;
  display: flex;

  ${tablet({ width: '90%', marginTop: '1rem' })}
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
export const ProductSubTotal = styled.div`
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
  border: 2px solid var(--accent-color-2);
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
  flex: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: start;

  ${tablet({ flex: 1.3 })}
`
export const Image = styled.img`
  width: 70%;

  ${tablet({ width: '50%' })}
`
export const Title = styled.p`
  font-size: 1.70rem;
  font-weight: 500;
  color: var(--text-2-color);
  transition: 0.2s ease-out;

  &:hover{
    color: var(--primary-color);
    transition: 0.2s ease-out;
  }

  ${laptop({ fontSize: '1.55rem' })}
`

export const OptionsWrapper = styled.div`
  margin-top: 1rem;
`
export const OptionContent = styled.div`
  padding-bottom: 0.5rem;
`

export const OptionTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-2-color);

`

export const OptionDescription = styled.p`
  font-size: 1.10rem;
  font-weight: 400;
  color: var(--text-color);
  margin-top: .2rem;

`
