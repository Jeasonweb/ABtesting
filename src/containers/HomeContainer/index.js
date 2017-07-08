import React, {Component} from 'react'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  render () {
    return (
      <div>首页内容 {'>*_*<'} </div>
    )
  }
}

export default connect()(HomeContainer)
