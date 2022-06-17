import { Heading } from '../../styles/globalStyles'
import { Container, ContentContainer, Desc, Image, ImgContainer, InfoContainer, Title, WhyChooseUsWrapper, Wrapper } from './WhyChooseUsStyles'
import Care from '../../../assets/svg/care.svg'
import Quality from '../../../assets/svg/quality.svg'

const WhyChooseUs = () => {
  return (
    <Container>
      <WhyChooseUsWrapper>
        <Heading inverse upper mb='5rem' >¿Por qué elegirnos?</Heading>
        <Wrapper>
          <ContentContainer>
            <ImgContainer>
              <Image src={Quality} />
            </ImgContainer>
            <InfoContainer>
              <Title>Calidad en nuestros productos</Title>
              <Desc>Luisa's Cake cumple con los más altos estándares de calidad y sabor para satisfacer a nuestros clientes.</Desc>
            </InfoContainer>
          </ContentContainer>
          <ContentContainer>
            <ImgContainer>
              <Image src={Care} />
            </ImgContainer>
            <InfoContainer>
              <Title>Cuidamos nuestros productos</Title>
              <Desc>Seguimos todos los procedimientos de bioseguridad y buenas prácticas a lo largo de la fabricación.</Desc>
            </InfoContainer>
          </ContentContainer>
        </Wrapper>
      </WhyChooseUsWrapper>
    </Container>
  )
}

export default WhyChooseUs
