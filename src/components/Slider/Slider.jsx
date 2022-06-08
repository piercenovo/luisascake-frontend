import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './SliderStyles'

const Slider = ({ sliders }) => {
  const iconStyles = { color: 'var(--text-2-color)', fontSize: '30px' }

  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')} >
        <KeyboardArrowLeftOutlined style={iconStyles} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliders.map((slider) => {
            return (
            <Slide bg={slider.bg} key={slider.id}>
              <ImgContainer>
                  <Image src={slider.image} alt={slider.title} />
              </ImgContainer>
              <InfoContainer>
                <Title>{slider.title}</Title>
                <Desc>{slider.desc}</Desc>
                <Button inverse>{slider.button}</Button>
              </InfoContainer>
            </Slide>
            )
          })}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')} >
        <KeyboardArrowRightOutlined style={iconStyles} />
      </Arrow>
    </Container>
  )
}

export default Slider
