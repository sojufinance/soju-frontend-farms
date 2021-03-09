import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/soju/3.png'), url('/images/soju/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'Soju Finance')}
        </Heading>
        <Text>{TranslateString(578, 'Prepare your glass for some SOJU! Free SOJU for all!')}</Text>
        <br/>
        <h1><a style={{textDecorationLine: "underline"}} href="https://app.bounce.finance/fixed-swap/3475" target="_blank" rel="noreferrer">{` 1st pre-sale of SOJU (1 BNB = 50 SOJU) has started on Bounce. Click here to buy!`}</a></h1>
        <br/>
        <Text>{` 2nd pre-sale of SOJU (1 BNB = 45 SOJU) will start at March 10 2021 4:00 UTC `}</Text>
        <br/>
        <Text>{` Rewards will start in `} <a style={{textDecorationLine: "underline"}} href='https://bscscan.com/block/countdown/5559000' target="_blank" rel="noreferrer">block 5559000</a> {` on March 10 2021 13:00 UTC`}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
