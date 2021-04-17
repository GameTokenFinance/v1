import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.gme,
    earningToken: tokens.gme,
    contractAddress: { // masterChef contract
      97: '',
      56: '0xF5979532dACcdc24374997118AA07b05D1Cfc8C1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
