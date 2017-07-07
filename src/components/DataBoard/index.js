import createG2 from 'g2-react'
import { Stat } from 'g2'
import React from 'react'

const Chart = createG2(chart => {
  chart.col('month', {
    alias: '月份',
    range: [0, 1]
  })
  chart.col('temperature', {
    alias: '平均温度(°C)'
  })
  chart.line().position('month*temperature').size(2)
  chart.render()
})
class MyComponent extends React.Component {
  state = {
    data: [
      { month: 'Jan', temperature: 7.0 },
      { month: 'Feb', temperature: 6.9 },
      { month: 'Mar', temperature: 9.5 },
      { month: 'Apr', temperature: 14.5 },
      { month: 'May', temperature: 18.2 },
      { month: 'Jun', temperature: 21.5 },
      { month: 'Jul', temperature: 25.2 },
      { month: 'Aug', temperature: 26.5 },
      { month: 'Sep', temperature: 23.3 },
      { month: 'Oct', temperature: 18.3 },
      { month: 'Nov', temperature: 13.9 },
      { month: 'Dec', temperature: 9.6 }
    ],
    forceFit: true,
    width: 500,
    height: 450
  }
  render () {
    return (
      <div>
        <Chart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          forceFit={this.state.forceFit} />
      </div>
    )
  }
}

export default MyComponent
