import { Person } from '@material-ui/icons'
import FacebookLogo from '../../../assets/svg/facebook/Facebook'
import InstagramLogo from '../../../assets/svg/instagram/Instagram'
import WhatsappLogo from '../../../assets/svg/whatsapp/Whatsapp'
import { Container, Wrapper, Left, Right, SocialItem, SocialLink, SocialTitle, Slash, AccountTitle, AccountLink } from './TopbarStyles'

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SocialItem>
            <SocialLink href='tel:+51981073159' target='_blank'>
              <WhatsappLogo color='var(--text-2-color)' height='1.8rem' />
            </SocialLink>
            <SocialLink href='tel:+51981073159' target='_blank'>
              <SocialTitle>+51 986 675 455</SocialTitle>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href='https://web.facebook.com/PateleriaLuisasCake' target='_blank'>
              <FacebookLogo color='var(--text-2-color)' height='1.8rem' />
            </SocialLink>
            <SocialLink href='https://web.facebook.com/PateleriaLuisasCake' target='_blank'>
              <SocialTitle>Luisa’s Cake</SocialTitle>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href='https://www.instagram.com/luisascake_' target='_blank'>
              <InstagramLogo color='var(--text-2-color)' height='1.8rem' />
            </SocialLink>
            <SocialLink href='https://www.instagram.com/luisascake_' target='_blank'>
              <SocialTitle>Luisascake_</SocialTitle>
            </SocialLink>
          </SocialItem>
        </Left>
        <Right>
          <AccountLink to='/ingresar'>
            <Person style={{ fontSize: '24px', color: 'var(--text-2-color)' }} />
          </AccountLink>
          <AccountLink to='/ingresar'>
            <AccountTitle>Ingresar</AccountTitle>
          </AccountLink>
          <Slash>/</Slash>
          <AccountLink to='/crear-cuenta'>
            <AccountTitle>Crear cuenta</AccountTitle>
          </AccountLink>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Topbar
