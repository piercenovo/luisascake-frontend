import styled from 'styled-components'
import { laptop } from '../../../styles/globalStyles'

export const Bottom = styled.div`
width: 100%;
`

export const ShareContainer = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: column;
margin-top: 3rem;
`

export const TitleShare = styled.span`
font-weight: 500;
color: var(--text-color);
font-size: 1.8rem;

`

export const IconsShare = styled.picture`
margin-top: 1.6rem;
`

export const IconShare = styled.img`
height: 22px;
fill: var(--light-color);

${laptop({ height: '20px' })}
`
export const IconLink = styled.a`
padding-right: 1.8rem;
`
