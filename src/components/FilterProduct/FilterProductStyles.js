import { makeStyles, Slider } from '@material-ui/core'
import styled from 'styled-components'

export const Title = styled.p`
  color: var(--text-2-color);
  font-size: 2.1rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 5.2rem;
`

export const Price = styled.span`
  color: var(--text-color);
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: .8rem;
`

export const FilterSlider = styled(Slider)`
  & .MuiSlider-valueLabel {
    font-size: 1.095rem;
  }
`
export const useStyles = makeStyles({
  root: {
    width: '90%'
  },
  thumb: {
    color: 'var(--accent-color-2)'
  },
  rail: {
    color: 'var(--accent-color-3)'
  },
  track: {
    color: 'var(--accent-color-2)'
  }
})

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`
