import React from 'react';
import { FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa';
import{FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink} from './FooterComponents'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ="/">Salad</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink to="/" target="_blank" aria_label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria_label="Instagram"  rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria_label="Twitter"  rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                            
                            
                        </SocialIcons>
                    </SocialMediaWrap>

                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
