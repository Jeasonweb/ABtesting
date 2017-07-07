import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Bundle } from '@/utils'
import DataBoard from 'bundle-loader?lazy!@/containers/DataBoardContainer/DataBoardContainer'

const DataBoardAsync = () => (
  <Bundle load={DataBoard}>
    {(DataBoardAsync) => <DataBoardAsync />}
  </Bundle>
)

export default DataBoardAsync
