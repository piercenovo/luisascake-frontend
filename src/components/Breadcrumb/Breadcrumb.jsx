import { Container, Crumb, CrumbContainer, Slash, TitleContainer, TextCrumb, Title, Wrapper, CrumbLink } from './BreadcrumbStyles'

const Breadcrumb = ({ firstLink, firstName, secondName, title }) => {
  const colorStyles = { color: 'var(--primary-color)' }
  return (
    <Container>
      <Wrapper>
        <CrumbContainer>
          <CrumbLink to={firstLink}>
            <TextCrumb>{firstName}</TextCrumb>
          </CrumbLink>
          <Slash>/</Slash>
          <Crumb>
            <TextCrumb style={colorStyles}>{secondName}</TextCrumb>
          </Crumb>
        </CrumbContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </Wrapper>
    </Container>
  )
}

export default Breadcrumb
