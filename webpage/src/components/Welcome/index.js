import React, {useState} from 'react';
import { Button2 } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './WelcomeElements';

const Welcome = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg />
                {/* <VideoBg src={Image} type='herobg/png'/> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>INVEST ON A LIMITED EDITION CRYPTOPRESIS</HeroH1>
                <HeroP>
                    Be part of the select few who get their hands on these limited edition art pieces. Own part of history.
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 
                        to='Mint' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} duration={500} spy={true} exact='true' offset={-100}
                    >
                        Buy {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Welcome