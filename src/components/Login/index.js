import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Input, Checkbox, Icon } from 'antd'
import styles from './style.less'

const FormItem = Form.Item

class Login extends React.PureComponent {
  onSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit && this.props.onSubmit(values)
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles['login-container']}>
        <Form onSubmit={e => this.onSubmit(e)} className={styles['login-form']}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }]
            })(
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>自动登录</Checkbox>
            )}
            <a className={styles['login-form-forgot']} href='#'>忘记密码</a>
            <Button type='primary' htmlType='submit' className={styles['login-form-button']}>
              登录
            </Button>
            <a href='#'>注册账户</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func
}

const WrappedLogin = Form.create()(Login)

export default WrappedLogin
