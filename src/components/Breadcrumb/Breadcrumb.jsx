import { Container, Crumb, CrumbContainer, Slash, TitleContainer, TextCrumb, Title, Wrapper, CrumbLink } from './BreadcrumbStyles'

const Breadcrumb = ({ active, firstLink, firstName, secondName }) => {
  // const colorStyles = { color: 'var(--primary-color)' }
  return (
    <Container>
      <Wrapper>
        <CrumbContainer>
          <CrumbLink to='/'>
            <TextCrumb>Home</TextCrumb>
          </CrumbLink>
          {active && <CrumbLink to={firstLink}>
            <Slash>/</Slash>
            <TextCrumb>{firstName}</TextCrumb>
          </CrumbLink>}
          <Crumb>
            <Slash>/</Slash>
            <TextCrumb>{secondName}</TextCrumb>
          </Crumb>
        </CrumbContainer>
        <TitleContainer>
          <Title>{secondName}</Title>
        </TitleContainer>
      </Wrapper>
    </Container>
  )
}

export default Breadcrumb
