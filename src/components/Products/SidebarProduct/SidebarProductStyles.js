import styled from 'styled-components'

export const Sidebar = styled.aside`
  min-width: 300px;
  /* min-height: 300px; */
  background-color: var(--light-color);
  display: flex;
  flex-direction: column;
  padding: 1rem 2.3rem;
`

export const SearchContainer = styled.div`
  border: .23rem solid transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-left: 1.5rem;
  margin-right: 2rem; */
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 0 .8rem;
  background-color: #fff;
  height: 35px;
  border: .23rem solid #fff;
  transition: all 0.3s ease-in-out;

  &:focus-within{
    border: .23rem solid var(--accent-color-3);
    transition: all 0.3s ease-in-out;
  }

`
export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 1.6rem;
  padding: 10px 10px;
  background: transparent;
  transition: border-color 0.2s;
  width: 100%;
  color: var(--text-2-color);

  &::placeholder{
    color: var(--text-color);
  }
`

export const Title = styled.p`
  color: var(--text-2-color);
  font-size: 2.1rem;
  font-weight: 500;
  /* padding: 0 .8rem; */
  /* margin-left: 1.5rem; */
  /* margin-right: 2rem; */
  margin-top: 2.2rem;
`

export const Price = styled.span`
  color: var(--text-color);
  font-size: 1.4rem;
  font-weight: 500;
  /* padding: 0 .8rem; */
  /* margin-left: 1.5rem;
  margin-right: 2rem; */
  margin-top: 1.6rem;
  margin-bottom: 1.5rem;
`

export const CategoryContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding-top: 2rem;
`
export const CategoryTittle = styled.aside`
  display: flex;
  font-size: 1.7rem;
  color: var(--text-color);
`
