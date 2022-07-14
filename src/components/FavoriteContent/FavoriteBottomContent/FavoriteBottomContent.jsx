import FacebookLogo from '../../../assets/svg/facebook/Facebook'
import MessengerLogo from '../../../assets/svg/messenger/Messenger'
import InstagramLogo from '../../../assets/svg/instagram/Instagram'
import WhatsappLogo from '../../../assets/svg/whatsapp/Whatsapp'
import TwitterLogo from '../../../assets/svg/twitter/Twitter'
import { Bottom, IconLink, IconsShare, ShareContainer, TitleShare } from './FavoriteBottomContentStyles'

const FavoriteBottomContent = () => {
  return (
    <Bottom>
        <ShareContainer>
          <TitleShare>Compartir en:</TitleShare>
          <IconsShare>
            <IconLink href="https://web.facebook.com/PateleriaLuisasCake" target="_blank">
              <FacebookLogo color="var(--accent-color-2)" height="2.2rem" />
            </IconLink>
            <IconLink href="https://web.facebook.com/PateleriaLuisasCake" target="_blank">
              <MessengerLogo color="var(--accent-color-2)" height="2.2rem" />
            </IconLink>
            <IconLink href="https://www.instagram.com/luisascake_" target="_blank">
              <InstagramLogo color="var(--accent-color-2)" height="2.2rem" />
            </IconLink>
            <IconLink href="https://web.facebook.com/PateleriaLuisasCake" target="_blank">
              <WhatsappLogo color="var(--accent-color-2)" height="2.2rem" />
            </IconLink>
            <IconLink href="https://web.facebook.com/PateleriaLuisasCake" target="_blank">
              <TwitterLogo color="var(--accent-color-2)" height="2.2rem" />
            </IconLink>
          </IconsShare>
        </ShareContainer>
      </Bottom>
  )
}

export default FavoriteBottomContent
