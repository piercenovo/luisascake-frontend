import styled from 'styled-components'
import { desktop, laptop, mobile } from '../../styles/globalStyles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
`

export const Wrapper = styled.div`
  padding: 1rem 5rem;
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #222;
  ${laptop({ flexDirection: 'column', alignItems: 'center' })}
`

export const ImgContainer = styled.figure`
 flex: 1;
 display: flex;
 justify-content: flex-start;

 ${laptop({ justifyContent: 'center' })}
`
export const Image = styled.img`
  width: 85%;
  object-fit: cover;
  border: 14px solid var(--light-color);
  margin-bottom: 5rem;

  ${laptop({ width: '95%' })}
`
export const InfoContainer = styled.div`
  flex: 1.7;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  ${mobile({ flexDirection: 'column', alignItems: 'flex-start' })}
`
export const DescriptionWrapper = styled.div`
  display: flex;

  &:first-child {
    flex: 4;
    text-align: start;
    flex-direction: row;
    justify-content: space-between;
  }

  &:last-child {
    flex: 1;
    text-align: end;
  flex-direction: column;

    ${mobile({ textAlign: 'start' })}
  }
`

export const Description = styled.div`
`

export const Info = styled.div`
  flex: 2;
`
export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  color: var(--text-2-color);
  margin-bottom: 1rem;
`
export const Desc = styled.p`
  font-size: 2rem;
  color: var(--text-color);
`
export const Span = styled.span`
  font-size: 2.6rem;
  color: var(--text-2-color);
`

export const Price = styled.span`
  color: var(--text-color);
  font-weight: 500;
  font-size: 3rem;
`

export const PreviousPrice = styled.span`
  color: var(--text-color);
  text-decoration: line-through;
  font-weight: 400;
  font-size: 2.6rem;
`

export const PriceDisc = styled.span`
  color: var(--accent-color-1);
  font-weight: 500;
  font-size: 3rem;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  /* background-color: green; */
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  /* background-color: red; */
  width: 70%;

  ${desktop({ width: '90%' })}
  ${mobile({ width: '100%' })}

`

export const FilterTitle = styled.span`
  font-size: 1.8rem;
  color: var(--text-2-color);
  flex: 1;
  text-align: start;
  margin-left: 2rem;
  margin-right: 1rem;
`
export const FilterSize = styled.select`
  padding: .7rem;
  outline: none;
  cursor: pointer;
  border: 2px solid var(--accent-color-3);
  border-radius: 5px;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.6rem;
  flex: 1.5;
  margin-left: 1rem;
  margin-right: 2rem;

  
`
export const FilterSizeOption = styled.option`
`

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid var(--accent-color-2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

export const ShareContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
`

export const TitleShare = styled.span`
 font-weight: 500;
 color: var(--text-color);
 font-size: 1.6rem;

`

export const IconsShare = styled.picture`
margin-top: 1.6rem;
`

export const IconShare = styled.img`
  /* padding-right: 1.8rem; */
  height: 22px;
  fill: var(--light-color);

  ${laptop({ height: '20px' })}

`

export const IconLink = styled.a`
  padding: 0 1rem;

`
