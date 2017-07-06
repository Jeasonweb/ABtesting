import styles from './index.less'
import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className={cx('login-form')}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={cx('login-form-forgot')} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={cx('login-form-button')}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NormalLoginForm)
