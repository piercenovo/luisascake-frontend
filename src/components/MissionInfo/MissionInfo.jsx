import { Container, Image, ImgContainer, InfoContainer, Parr, Title, Wrapper } from './MissionInfoStyles'

const MissionSection = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src='https://res.cloudinary.com/cloud-digital-asset/image/upload/v1655264598/about-2_p9a0og.png' alt='Misión'/>
        </ImgContainer>
        <InfoContainer>
          <Title>Misión</Title>
          <Parr>Proporcionar a los consumidores los postres más frescos y de la más alta calidad a precios razonables. Para lograrlo y ser rentables, apostamos por la innovación de productos y buscamos eficiencias operativas. </Parr>
          <Title>Visión</Title>
          <Parr>Ser reconocidos como una de las mejores marcas de pastelería del mercado por su excelente calidad productos, ampliando su cobertura, mejorando los procesos productivos y desarrollando un servicio cada vez más ameno, eficiente y satisfactorio para nuestros clientes.</Parr>
        </InfoContainer>
      </Wrapper >
    </Container>
  )
}

export default MissionSection
