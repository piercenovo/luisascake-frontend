import Slider from 'react-slick'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopularWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 7rem;
  margin-bottom: 6rem;
  padding: 0rem 9rem;
  /* background-color: red; */
  position: relative;
`
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr));
  gap: 2rem;
`

export const ReviewSlider = styled(Slider)`
    width: 100%;
    padding: 4rem 3rem;

    .slick-track {
      display: flex;
      gap: 2rem;
    }
    .slick-slide {
      display: flex;
      justify-content: center;
      margin-bottom: 1;
      outline: none;
    }

    .slick-list {
      overflow: hidden;
    }

`

export const Arrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: var(--light-color);
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
  bottom:  0;
  left: ${props => props.direction === 'left' && '5rem'};
  right: ${props => props.direction === 'right' && '5rem'};
  margin: auto;
  cursor: pointer;
  z-index: 4;
`

export const sliderSettings = {
  arrows: false,
  slidesToShow: 4,
  focusOnselect: false,
  accessability: false,
  infinite: true,
  slidesToScroll: 1,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}
