import React, {Component} from 'react'
import { connect } from 'react-redux'
import DataBoard from '@/components/DataBoard'

class DataBoardContainer extends Component {
  render () {
    return (
      <DataBoard />
    )
  }
}

export default connect()(DataBoardContainer)
