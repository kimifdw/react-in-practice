import React from 'react'
import { Card, Alert, Form, Button, Upload, Input, Divider, Icon, message, Radio } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
}

const UploadButton = ({ isLoading }) => (
  <div>
    <Icon type={isLoading ? 'loading' : 'plus'} />
    <div>Upload</div>
  </div>
)

function beforeUpload (file) {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    message.error('You can only upload JPG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJPG && isLt2M
}

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
}

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { isLoading: false }
  }
  handleChange (info) {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
    }
  }
  onSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }
  render () {
    const { form: { getFieldDecorator } } = this.props
    const { isLoading, imageUrl } = this.state
    return (
      <Card title='Edit Company Details'>
        <Alert message='This information is used for billing and invoice purposes.' type='info' showIcon />
        <Form onSubmit={this.onSubmit} style={{ marginTop: 18 }}>
          <Divider />
          <FormItem
            {...formItemLayout}
            label='Full Name'
            extra='We will use this name for the invoices.'>
            {
              getFieldDecorator('name', { initialValue: 'Quvideo.Inc' })(<Input />)
            }
          </FormItem>
          <Divider />
          <FormItem
            {...formItemLayout}
            label='Company Address'
            extra='We will use this address for the invoices.'>
            {
              getFieldDecorator('address')(<Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)
            }
          </FormItem>
          <Divider />
          <FormItem
            {...formItemLayout}
            label='Company Phone'
            extra='We will use this phone number for the invoices. Phone Number should be 10 Digit.'>
            {
              getFieldDecorator('phoneNumber')(<Input />)
            }
          </FormItem>
          <Divider />
          <FormItem
            {...formItemLayout}
            label='Company Logo'
            extra='Company logo should be min. 128x128 in resolution.'>
            {
              getFieldDecorator('logo')(
                <Upload
                  name='logo'
                  listType='picture-card'
                  showUploadList={false}
                  // action='//jsonplaceholder.typicode.com/posts/'
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt='logo' /> : <UploadButton isLoading={isLoading} />}
                </Upload>
              )
            }
          </FormItem>
          <Divider />
          <FormItem {...formItemLayout} label='What type of Company'>
            {
              getFieldDecorator('type', { initialValue: 1 })(
                <RadioGroup>
                  <Radio style={radioStyle} value={1}>Agency</Radio>
                  <Radio style={radioStyle} value={2}>Brand</Radio>
                </RadioGroup>
              )
            }
          </FormItem>
          <Divider />
          <FormItem wrapperCol={{ span: 14, offset: 6 }}>
            <Button type='primary' htmlType='submit'>Update Profile</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

const Wrapper = Form.create()(Company)

export default Wrapper
