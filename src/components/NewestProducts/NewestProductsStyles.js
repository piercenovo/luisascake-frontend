import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NewestWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 7rem;
  margin-bottom: 6rem;
  padding: 0rem 5rem;
`
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr));
  gap: 2rem;
`
