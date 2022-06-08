import styled from 'styled-components'
import { laptop } from '../../styles/globalStyles'

export const Container = styled.div`
  display: flex;
  margin: 6rem 0;
`

export const Wrapper = styled.div`
  padding: 1rem 5rem;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
  ${laptop({ flexDirection: 'column-reverse' })}
`

export const ImgContainer = styled.div`
 flex: 1;
 /* display: flex;
 justify-content: flex-end; */
`
export const Image = styled.img`
  width: 90%;
  object-fit: cover;
`
export const InfoContainer = styled.div`
  flex: 1.5;
  margin-bottom: 4rem;
`
export const DescriptionContainer = styled.div`
  display: flex;
  /* justify-content: flex-start;
  align-items: flex-start; */
  justify-content: space-between;
  margin-bottom: 3rem;
  /* background-color: #222; */
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  text-align: end;

  &:first-child {
    /* flex: 2;
    text-align: start; */
    margin-right: 5rem;
    text-align: start;
  }
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
  font-size: 3rem;
  color: var(--text-2-color);
`
export const Price = styled.span`
  font-size: 3.7rem;
  font-weight: 500;
  color: var(--accent-color-2);
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
  width: 100%;
`

export const FilterTitle = styled.span`
  font-size: 1.8rem;
  color: var(--text-2-color);
  flex: 1;
  text-align: start;
  margin-left: 8rem;
  margin-right: 2rem;
`
export const FilterSize = styled.select`
  padding: .7rem;
  outline: none;
  cursor: pointer;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.6rem;
  flex: 1.5;
  margin-right: 8rem;
`
export const FilterSizeOption = styled.option``

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
  border: 2px solid var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
