import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions.js";
import { fetchData } from "../../redux/data/dataActions.js";
import {
  Container,
  ResponsiveWrapper,
  Heading,
  StyledButton,
  StyledRoundButton,
  // StyledLogo,
  // StyledImg,
  StyledLink,
  SpacerXSmall,
  SpacerSmall,
  SpacerMedium,
  // SpacerLarge,
  TextTitle,
  // TextSubTitle,
  TextDescription,
  // StyledClickable,
} from './MintingDappElements';

function Dapp() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
    NAME: "",
    SYMBOL: "",
    ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
    .mint(mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: totalCostWei,
    })
    .once("error", (err) => {
      console.log(err);
      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    })
    .then((receipt) => {
      console.log(receipt);
      setFeedback(
      `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Rarible.com to view it.`
      );
      setClaimingNft(false);
      dispatch(fetchData(blockchain.account));
    });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
    newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
    newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  // eslint-disable-next-line
  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <Container id="Mint" flex={1} ai={"center"} style={{ padding: 48, backgroundColor: "#000000" }} >
      <Heading>
        BUY A PRESI
      </Heading>
      <ResponsiveWrapper flex={1} >
        <Container flex={2} jc={"center"} ai={"center"} style={{
            backgroundColor: "#000000",
            padding: 24,
            borderRadius: 24,
            border: "4px dashed #00FFFF",
            boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
          }} >
          <TextTitle style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#FFFFFF", }} >
            <TextTitle style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "#FFFFFF", }} >
              LIMITED COLLECTION
            </TextTitle>
            <SpacerXSmall />
              {CONFIG.MAX_SUPPLY - data.totalSupply} REMAINING
              {/*{data.totalSupply} / {CONFIG.MAX_SUPPLY}*/}
          </TextTitle>
          <TextDescription style={{ textAlign: "center", color: "#FFFFFF" }} >
              connect wallet to view remaining supply.
          </TextDescription>
          <SpacerXSmall />
          <TextDescription style={{ textAlign: "center", color: "#FFFFFF", }} >
            <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
              {/*{truncate(CONFIG.CONTRACT_ADDRESS, 15)}*/}
              {(CONFIG.CONTRACT_ADDRESS, "Etherscan")}
            </StyledLink>
          </TextDescription>
          <SpacerSmall />
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <TextTitle style={{ textAlign: "center", color: "#FFFFFF" }} >
                The sale has ended.
              </TextTitle>
              <TextDescription style={{ textAlign: "center", color: "#FFFFFF" }} >
                You can still find {CONFIG.NFT_NAME} on
              </TextDescription>
              <SpacerSmall />
              <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK} >
                {CONFIG.MARKETPLACE}
              </StyledLink>
            </>
          ) : (
            <>
              <TextTitle style={{ textAlign: "center", color: "#FFFFFF" }} >
                1 {CONFIG.NFT_NAME} costs {CONFIG.DISPLAY_COST}{" "}
                {CONFIG.NETWORK.SYMBOL}.
              </TextTitle>
              <SpacerXSmall />
              <TextDescription style={{ textAlign: "center", color: "#FFFFFF" }} >
                Excluding gas fees.
              </TextDescription>
              <SpacerSmall />
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <Container ai={"center"} jc={"center"}>
                  <TextDescription style={{ textAlign: "center", color: "#FFFFFF", }} >
                    Connect to the {CONFIG.NETWORK.NAME} network to buy CryptoPresis
                  </TextDescription>
                  <SpacerSmall />
                  <StyledButton onClick={(e) => { e.preventDefault(); dispatch(connect()); getData(); }} >
                    BUY
                  </StyledButton>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <SpacerSmall />
                      <TextDescription style={{ extAlign: "center", color: "#FFFFFF", }} >
                        {blockchain.errorMsg}
                      </TextDescription>
                    </>
                  ) : null}
                </Container>
              ) : (
                <>
                  <TextDescription style={{ textAlign: "center", color: "#FFFFFF", }} >
                    {feedback}
                  </TextDescription>
                  <SpacerMedium />
                  <Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledRoundButton style={{ lineHeight: 0.4 }} disabled={claimingNft ? 1 : 0} onClick={(e) => {
                        e.preventDefault(); decrementMintAmount();
                      }} >
                      -
                    </StyledRoundButton>
                    <SpacerMedium />
                    <TextDescription style={{ textAlign: "center", color: "#FFFFFF", fontSize: "18px", }} >
                      {mintAmount}
                    </TextDescription>
                    <SpacerMedium />
                    <StyledRoundButton disabled={claimingNft ? 1 : 0} onClick={(e) => {
                      e.preventDefault(); incrementMintAmount(); 
                    }} >
                      +
                    </StyledRoundButton>
                  </Container>
                  <SpacerSmall />
                  <Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledButton disabled={claimingNft ? 1 : 0} onClick={(e) => {
                        e.preventDefault(); claimNFTs(); getData(); }} >
                      {claimingNft ? "BUSY" : "BUY"}
                    </StyledButton>
                  </Container>
                </>
              )}
            </>
          )}
          <SpacerMedium />
        </Container>
      </ResponsiveWrapper>
    </Container>
  )
}

export default Dapp;
