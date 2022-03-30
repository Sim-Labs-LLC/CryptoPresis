import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import Icon1 from '../../assets/images/os-svg.svg';
import Icon2 from '../../assets/images/looksrare-svg.svg';
import Icon3 from '../../assets/images/rarible-svg.png';
// import Dropdown from '../Dropdown';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SideBarWrapper,
    SidebarMenu,
    SidebarItem,
    SidebarLinksS,
    SidebarLinksR,
    SideSocialIcon,
    SocialIconLink,
    Img,
    // Link
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    // const [dropdown, setDropdown] = useState(false);

    // const onMouseEnter = () => {
    //     if(window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // };

    // const onMouseLeave = () => {
    //     if(window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //     }
    // };
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    {/* <SidebarItem>
                        <SidebarLink to="Home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            HOME
                        </SidebarLink>
                    </SidebarItem> */}
                    <SidebarItem>
                        <SidebarLinksS to="Mint" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            BUY A PRESI
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="Roadmap" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            ROADMAP
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="Collection" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            COLLECTION
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="Team" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            TEAM
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="FAQ" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            FAQ
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksR to="/drop" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            DROP
                        </SidebarLinksR>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            MERCH (Coming Soon)
                        </SidebarLinksS>
                    </SidebarItem>
                    {/* <SidebarItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <SidebarLinksR to="" >
                            MEMBERS <i className='fas fa-caret-down' />
                        </SidebarLinksR>
                        {dropdown && <Dropdown />}
                    </SidebarItem> */}
                </SidebarMenu>
                <SideSocialIcon>
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
                </SideSocialIcon>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
