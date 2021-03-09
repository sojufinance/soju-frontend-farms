import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://exchange.sojudefi.com/',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://exchange.sojudefi.com/#/pool',
  //     },
  //   ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Store',
    icon: 'PoolIcon',
    href: '/store',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x7523403D003BD8a89bF770aA68D15C4db1b5608B',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/soju-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/soju-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x7523403D003BD8a89bF770aA68D15C4db1b5608B',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/sojufinance/',
      },
      {
        label: 'Docs',
        href: 'https://soju-finance.gitbook.io/soju-finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@SojuFinance',
      },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
