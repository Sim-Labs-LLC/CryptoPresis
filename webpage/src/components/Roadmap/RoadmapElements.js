import styled from 'styled-components';

export const InfoContainer = styled.div `
    color: #fff;
    background: #000;
    padding: 48px 24px;

    @media screen and (max-width: 768px) {
        padding: 48px 24px 0 24px;
        height: 100%;
        max-height: 3000px;
    }

    @media screen and (max-width: 375px) {
        padding: 48px 24px;
        height: 100%;
        max-height: 6000px;
    }
`;

export const InfoRow = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    border-left: 4px solid #fff;
    padding-left: 25px
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    max-height: 2000px;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 

    @media screen and (max-width: 768px) {
        max-height: 3000px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    padding: 24px 0 24px 0;
    width: 100%;
    justify-content: center;
`;

export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    box-shadow: 0px 3px 6px -2px rgba (0, 0, 0, 0.2);
    padding: 24px;
    margin: 48px 0;
    line-height: 2;
    cursor: pointer;
    position: relative;
    transition: all 500ms;

    &::before {
        content: "";
        width: 14px;
        height: 14px;
        border: 2px solid #fff;
        position: absolute;
        left: -36px;
        top: 20%;
        transform: translateY(-50%);
        background: cyan;
        transition: all 500ms;
    };

    &:hover {
        box-shadow: 1px 6px 16px -1px rgba (0, 0, 0, 0.1);
    };

    &:hover::before {
        background: cyan;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-left: 0px;
    }
`;

export const Heading = styled.h1`
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const Heading2 = styled.h2`
    font-size: 18px;
    margin: 0;
    font-style: bold;
    // border-bottom: 0.5px solid #fff;
    color: #fff;
`;

export const ContentContainer = styled.div`
    max-width: 800px;
    margin-top: 24px;
`;

export const Subtitle = styled.p`
    margin-bottom: 25px;
    margin-bottom: 25px;
    text-align: justify;
    font-size: 12px;
    line-height: 24px;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;
