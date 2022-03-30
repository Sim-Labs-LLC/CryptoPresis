import React from 'react';
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    TitleContainer,
    // Column,
    TextWrapper,
    Heading,
    Heading2,
    ContentContainer,
    Subtitle,
} from './RoadmapElements';

const Roadmap = () => {

    return (
        <>
            <InfoContainer id="Roadmap">
                <InfoWrapper>
                    <TitleContainer>
                        <Heading>ROADMAP 1.0</Heading>
                    </TitleContainer>
                    <InfoRow>
                        <TextWrapper>
                            <Heading2>Sim Labs Genesis Collection</Heading2>
                            <ContentContainer>
                                <Subtitle>
                                    Holders of CryptoPresis will be guaranteed whitelist into all future projects 
                                    developed by the creators of CryptoPresis, Sim Labs, and one CryptoPresis 
                                    owned will equal to one whitelist!
                                </Subtitle>
                            </ContentContainer>
                        </TextWrapper>

                        <TextWrapper>
                            <Heading2>Drop Series from Local Artist</Heading2>
                            <ContentContainer>
                                <Subtitle>
                                    CryptoPresis holders will benefit from a series of Twitter background drops
                                    in colaboration with digital artist from El Salvador. The artwork from each
                                    artist will provide some form of future utility for holders as
                                    these local artists continue their artistic journey in the NFT space.
                                </Subtitle>
                            </ContentContainer>
                        </TextWrapper>

                        <TextWrapper>
                            <Heading2>Official Merch Drop</Heading2>
                            <ContentContainer>
                                <Subtitle>
                                    Launch of the member-exclusive CryptoPresis Merch Store, featuring
                                    limited edition tee, hooodies and other goodies. We will conducted seasoned
                                    drops for CryptoPresis holders to add to their collection.
                                </Subtitle>
                            </ContentContainer>
                        </TextWrapper>

                        <TextWrapper>
                            <Heading2>Gift CryptoPresis #1 to Nayib Bukele</Heading2>
                            <ContentContainer>
                                <Subtitle>
                                    Althought this is not a promise and has never been to sole purpose of CryptoPresis,
                                    we decided to still pursue gifting the president of El Salvador his personlized NFT.
                                    As a project will continue to innovative and in due time we will get recognized.
                                </Subtitle>
                            </ContentContainer>
                        </TextWrapper>

                        <TextWrapper>
                            <Heading2>Donate to Charitable Organizations</Heading2>
                            <ContentContainer>
                                <Subtitle>
                                    CryptoPresis will donate 10% to charitable organizations in El Salvador with the 
                                    purpose of providing a launch for local digital artists to become education in the
                                    NFT space and host numerous events throughout the year.
                                </Subtitle>
                            </ContentContainer>
                        </TextWrapper>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Roadmap;
 