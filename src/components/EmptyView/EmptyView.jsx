import { EmptyViewContainer, ImgContainer, Image, InfoContainer, Title, Main } from './EmptyViewStyles'
import Error404Svg from '../../assets/svg/404.svg'

const EmptyView = () => {
  return (
    <Main>
      <EmptyViewContainer>
      <ImgContainer>
        <Image src={Error404Svg} alt='Productos No Encontrados' />
      </ImgContainer>
      <InfoContainer>
        <Title>No se encontraron productos que coincidan con su selección.</Title>
      </InfoContainer>
    </EmptyViewContainer>
    </Main>
  )
}

export default EmptyView
