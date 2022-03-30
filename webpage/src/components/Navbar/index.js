import React, { useState, useEffect } from 'react';
import { FaBars, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Dropdown from '../Dropdown';
import Icon1 from '../../assets/images/os-svg.svg';
import Icon2 from '../../assets/images/looksrare-svg.svg';
import Icon3 from '../../assets/images/rarible-svg.png';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    ImgLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinksS,
    NavSocialIcon,
    SocialIconLink,
    Img,
    // Link
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <ImgLogo src={require("../../assets/images/logo.png")} alt="logo"/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            {/* <NavItem>
                                <NavLinks to="Home" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    HOME
                                </NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinksS to="Mint" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    BUY A PRESI
                                </NavLinksS>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinksS to="Marketplace" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    MARKETPLACE
                                </NavLinksS>
                            </NavItem> */}
                            <NavItem>
                                <NavLinksS to="Roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    ROADMAP
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="Collection" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    COLLECTION
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="Team" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    TEAM
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="FAQ" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    FAQ
                                </NavLinksS>
                            </NavItem>
                            <NavItem  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <NavLinksS>
                                    MEMBERS <i className='fas fa-caret-down' />
                                </NavLinksS>
                                {dropdown && <Dropdown />}
                            </NavItem>
                            <NavSocialIcon>
                                <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter" >
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram" >
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
                            </NavSocialIcon>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
