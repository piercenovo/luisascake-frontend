import { Badge } from '@material-ui/core'
import styled from 'styled-components'
import { mobile, tablet } from '../../../styles/globalStyles'

export const Container = styled.section`
  height: 75px;
  background-color: var(--accent-color-3);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  padding: 1rem 5rem;
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
`

export const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`
export const Center = styled.div`
 flex: 2;
 display: flex;
 align-items: center;
 justify-content: center;
`
export const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;

  ${tablet({ paddingRight: '1rem' })}
`

export const Logo = styled.img`
  width: 19rem;
  cursor: pointer;
`

export const MenuItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 25px;
  color: var(--text-2-color);
  font-weight: 600;

  &:nth-child(3n+1){
    ${tablet({ display: 'none' })}
  }

  &:last-child{
    ${mobile({ display: 'none' })}
  }
`

export const iconStyles = { color: 'var(--text-2-color)', fontSize: '27px' }
export const iconStylesTwo = { color: 'var(--text-2-color)', fontSize: '26px' }

export const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    color: 'white',
    backgroundColor: 'var(--accent-color-1)',
    fontSize: '1.1rem',
    width: '21px',
    height: '21px'
  }
})
