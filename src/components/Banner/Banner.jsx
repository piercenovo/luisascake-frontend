import { useNavigate } from 'react-router-dom'
import { SecondButton } from '../../styles/globalStyles'
import { Container, Desc, Image, ImgContainer, InfoContainer, InfoWrapper, Title, Wrapper } from './BannerStyles'

const Banner = ({ id, title, desc, img, imgStart, alt, buttonLabel, link }) => {
  const navigate = useNavigate()
  return (
    <Container id={id}>
      <Wrapper imgStart={imgStart ? 1 : 0}>
        <ImgContainer>
           <Image src={img} alt={alt} onClick={() => navigate(link)} />
        </ImgContainer>
        <InfoContainer>
          <InfoWrapper imgStart={imgStart ? 1 : 0}>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <SecondButton secondary='true' onClick={() => navigate(link)}>{buttonLabel}</SecondButton>
          </InfoWrapper>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Banner
