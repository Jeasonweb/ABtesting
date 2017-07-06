import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'
import { Button } from 'antd'

@pureRender
class Counter extends Component {
  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }
  clickHandle () {
    let { onIncrement } = this.props
    console.log('没毛病')
    onIncrement()
  }
  render () {
    console.log('render count component')
    let { counter, onDecrement, onIncrementAsync, onIncrementAsyncOnce } = this.props
    return (
      <div>
        <Button onClick={this.clickHandle}>
              Increment
        </Button>
        {' '}
        <Button onClick={onDecrement}>
              Decrement
        </Button>
        {' '}
        <Button onClick={onIncrementAsync}>
              IncrementAsync
        </Button>
        {' '}
        <Button onClick={onIncrementAsyncOnce}>
              IncrementAsyncOnce
        </Button>
        <hr />
        <div>Clicked: {counter}times</div>
      </div>
    )
  }
}

export default Counter
