import React from 'react'
import { Bundle } from '@/utils'
import DataBoard from 'bundle-loader?lazy!@/containers/DataBoardContainer/DataBoardContainer'

const DataBoardAsync = () => (
  <Bundle load={DataBoard}>
    {(DataBoardAsync) => <DataBoardAsync />}
  </Bundle>
)

export default DataBoardAsync
