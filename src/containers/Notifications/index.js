import React from 'react'
import { Card, Form, Checkbox, Divider, Button } from 'antd'

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
}

class Notifications extends React.Component {
  constructor (props) {
    super(props)
    this.state = { disableAll: false }
  }
  onSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        // this.props.onSubmit && this.props.onSubmit(values)
      }
    })
  }
  onChange (e) {
    if (e.target.checked) {
      const { setFieldsValue } = this.props.form
      setFieldsValue({ settings: [] })
      this.setState({ disableAll: true })
    }
  }
  onCheckboxChange (values) {
    setTimeout(() => {
      const { getFieldValue } = this.props.form
      this.setState({ disableAll: getFieldValue('settings').length === 0 })
    }, 0)
  }
  componentDidMount () {
    const { setFieldsValue } = this.props.form
    setFieldsValue({ settings: ['0', '2'] })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Card title='Edit Notification Settings'>
        <Form onSubmit={e => this.onSubmit(e)}>
          <FormItem {...formItemLayout} label='settings'>
            {
              getFieldDecorator('settings', { onChange: values => this.onCheckboxChange(values) })(
                <CheckboxGroup>
                  <div>
                    <Checkbox value='0'>Receive email when an influencer participates in a campaign.</Checkbox>
                  </div>
                  <div>
                    <Checkbox value='1'>Receive email when an influencer participates in a campaign.</Checkbox>
                  </div>
                  <div>
                    <Checkbox value='2'>Receive promotional and marketing emails.</Checkbox>
                  </div>
                </CheckboxGroup>
              )
            }
          </FormItem>
          <Divider />
          <FormItem {...formItemLayout} label='or'>
            <Checkbox onChange={e => this.onChange(e)} checked={this.state.disableAll}>Disable all</Checkbox>
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 4 }}>
            <Button type='primary' htmlType='submit'>Update</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(Notifications)
