import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import Icon1 from '../../assets/images/os-svg.svg';
import Icon2 from '../../assets/images/looksrare-svg.svg';
import Icon3 from '../../assets/images/rarible-svg.png';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    ImgLogo,
    WebsiteRights,
    Content,
    SocialIcons,
    SocialIconLink,
    Img,
    // ExternalLink
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Home</FooterLinkTitle>
                            <FooterLink to="Mint" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Buy A Presi</FooterLink>
                            <FooterLink to="Roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Roadmap</FooterLink>
                            <FooterLink to="Collection" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Collection</FooterLink>
                            <FooterLink to="Team" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Team</FooterLink>
                            <FooterLink to="FAQ" smooth={true} duration={500} spy={true} exact='true' offset={-100} >FAQ</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                            <FooterLink to="/">License Agreement</FooterLink>
                            <FooterLink to="/">Terms & Conditions</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome} >
                            <ImgLogo src={require("../../assets/images/logo.png")} alt="logo"/>
                        </SocialLogo>
                        <WebsiteRights>
                            <Content>
                                © Copyright {new Date().getUTCFullYear()} • CryptoPresis • All Rights Reserved
                            </Content>
                            <Content>
                                Powered by <Img src={require("../../assets/images/simlabs-logo.svg")} alt="logo"/> Sim Labs
                            </Content>
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//opensea.io/collection/cryptopresisoffcial" target="_blank" aria-label="OpenSea" >
                                <Img src={Icon1} />
                            </SocialIconLink>
                            <SocialIconLink href="//rarible.com/cryptopresisofficial" target="_blank" aria-label="Rarible" >
                                <Img src={Icon3} />
                            </SocialIconLink>
                            <SocialIconLink href="//looksrare.org/collections/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621" target="_blank" aria-label="LooksRare" >
                                <Img src={Icon2} />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
