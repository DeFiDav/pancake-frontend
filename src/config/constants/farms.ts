import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
//   {
//     pid: 0,
//     lpSymbol: 'CAKE',
//     lpAddresses: {
//       97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
//       56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
//     },
//     token: tokens.syrup,
//     quoteToken: tokens.wbnb,
//   },
  {
    pid: 1,
    lpSymbol: 'FIGO-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xf0a3c29cee5413d3c8efcd60c3b02e93796d3d21',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'FIGO-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x13b8C2bcB12B5dF6888b2B8F9d2a6f9fA08B6967',
    },
    token: tokens.cake,
    quoteToken: tokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      56: '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
      97: '0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  ]

export default farms
  
