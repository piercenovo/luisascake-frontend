import { ArrowForward, ArrowForwardIos, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Button } from '../../../../styles/globalStyles'
import { Arrow, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './SliderStyles'
import { useNavigate } from 'react-router-dom'

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

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const navigate = useNavigate()
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
                <Button
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                onClick={() => navigate(slider.link)}
                >{slider.button} {hover ? <ArrowForward /> : <ArrowForwardIos /> } </Button>
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
