import React from 'react';
import { Button } from '../ButtonElements';
import {
    DropContainer,
    DropWrapper,
    DropRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './DropElements';

const DropSection = ({
    lightBg,
    id, 
    imgStart, 
    topline, 
    lightText, 
    headline, 
    darkText, 
    description1, 
    description2, 
    description3,  
    buttonlabel, 
    img,
    link, 
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <DropContainer lightBg={lightBg} id={id}>
                <DropWrapper>
                    <DropRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description1}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Subtitle darkText={darkText}>{description3}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <BtnWrap>
                                <Button
                                    href={link}
                                    target="_blank"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonlabel}</Button>
                            </BtnWrap>
                        </Column2>
                    </DropRow>
                </DropWrapper>
            </DropContainer>
        </>
    )
}

export default DropSection;
