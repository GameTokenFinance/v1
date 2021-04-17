import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'GME',
    lpAddresses: {
      97: '',
      56: '0xD0F7af917457b0ae9FBC58C05d6b9Ab70737A92a',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },  
  {
    pid: 1,
    lpSymbol: 'GME-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0B22f27Cb363B4e7C1fF399528093C97336aDb40',
    },
    depositFee: '0',
    token: tokens.gme,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'GME-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF4eF2B628216d4E228E4e29b3b236F59487728b9',
    },
    depositFee: '0',
    token: tokens.busd,
    quoteToken: tokens.gme,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    depositFee: '3',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    depositFee: '3',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
 
]

export default farms
