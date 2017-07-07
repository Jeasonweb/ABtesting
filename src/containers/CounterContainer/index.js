import React from 'react'
import { connect } from 'react-redux'
import Counter from '@/components/Counter'
import CountTimer from '@/components/CountTimer'
import { Modal, Button } from 'antd'
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ONCE
} from '@/const/actions'
import {CT_SHOW_REQUEST} from '@/const/countTimer'

const confirm = Modal.confirm

function showConfirm () {
  confirm({
    title: '提示信息',
    content: '确定要删除这条数据吗？',
    onOk () {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
      }).catch(() => console.log('Oops errors!'))
    },
    onCancel () {}
  })
}

class counterContainer extends React.Component {
  render () {
    const {onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce} = this.props
    const {onShowCountTimer} = this.props
    let {counter, countTimer} = this.props
    return (
      <div>
        <Counter {...{onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce, counter}} />
        <Button onClick={onShowCountTimer}>点击显示倒计时</Button>
        <Button onClick={showConfirm}>点击显示弹出窗口</Button>
        <CountTimer show={countTimer.show} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    countTimer: state.countTimer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement () {
      dispatch({
        type: INCREMENT
      })
    },
    onDecrement () {
      dispatch({
        type: DECREMENT
      })
    },
    onIncrementAsync () {
      console.log('onIncrementAsync 延时1秒增加')
      dispatch({
        type: INCREMENT_ASYNC
      })
    },
    onIncrementAsyncOnce () {
      console.log('onIncrementAsyncOnce 同时多次触发仅执行最后一次')
      dispatch({
        type: INCREMENT_ASYNC_ONCE
      })
    },
    onShowCountTimer () {
      dispatch({
        type: CT_SHOW_REQUEST
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counterContainer)
