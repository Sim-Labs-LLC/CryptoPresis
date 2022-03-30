import React from 'react'
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    TextWrapper,
    Heading,
    Subtitle,
    // BtnWrap
} from './DropIntroElements';

const DropIntroSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <Heading>BITCOIN BACKGROUND BY CRYPTOPRESIS</Heading>
                            <Subtitle>Bitcoin Backgrounds is a specially curated Twitter Background NFT drop.</Subtitle>
                            <Subtitle>Selecting 5 of the top Salvadorean artists to launch their Genesis piece, this collection is available free-to-mint for 5 days exclusively for holders of the CryptoPresis NFT.</Subtitle>
                            <Subtitle>Each of these pieces will grant future utility for their holders and are designed to be used as Twitter backgrounds complementing the CryptoPresis NFT profile pictures.</Subtitle>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DropIntroSection
