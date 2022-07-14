import styled from 'styled-components'
import { desktop, edesktop, tablet } from '../../../styles/globalStyles'

export const Bottom = styled.div`
width: 100%;
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 3rem;
margin-bottom: 3rem;
`

export const SummaryContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
`

export const SummaryWrapper = styled.div`
width: 27%;
display: flex;
flex-direction: column;
justify-content: center;
background-color: var(--light-color);
padding-top: 3rem;
padding-bottom: 4rem;
padding-left: 3rem;
padding-right: 3rem;


${edesktop({ width: '34%' })}
${desktop({ width: '40%' })}
${tablet({ width: '100%', paddingLeft: '3rem', paddingRight: '3rem' })}
`

export const SummaryTitle = styled.h1`
font-weight: 500;
color: var(--text-2-color);
text-align: center;
margin-bottom: 1.5rem;
font-size: 2.3rem;
`

export const SummaryItem = styled.div`
margin-top: 1.5rem;
margin-bottom: 2.5rem;
display: flex;
justify-content: space-between;
color: var(--text-color);
font-weight: ${(props) => props.type === 'total' && '500'};
font-size: ${(props) => props.type === 'total' && '2rem'};
color:  ${(props) => props.type === 'total' && 'var(--accent-color-1)'};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``
