import React from 'react'
import { Card, Form, Button, Upload, Input, Divider, Icon, message } from 'antd'

const FormItem = Form.Item

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

class Profile extends React.Component {
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
      // Get this url from response in real world.
      // (function getBase64 (img, callback) {
      //   const reader = new window.FileReader()
      //   reader.addEventListener('load', () => callback(reader.result))
      //   reader.readAsDataURL(img)
      // })()
      // getBase64(info.file.originFileObj, imageUrl => this.setState({
      //   imageUrl,
      //   loading: false
      // }))
    }
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
  render () {
    const { form: { getFieldDecorator } } = this.props
    const { isLoading, imageUrl } = this.state
    return (
      <Card title='Edit Your Profile'>
        <Form onSubmit={this.onSubmit}>
          <FormItem {...formItemLayout} label='Full Name'>
            {
              getFieldDecorator('fullName', { initialValue: 'XueSeason' })(<Input />)
            }
          </FormItem>
          <Divider />
          <FormItem {...formItemLayout} label='Email Address'>
            <Input value={'jijie.xue@quvideo.com'} disabled />
            <div><Button type='primary'>修改密码</Button></div>
          </FormItem>
          <Divider />
          <FormItem
            {...formItemLayout}
            label='Phone Number'
            extra='Please provide a valid phone number on which we can get in touch with you.'>
            {
              getFieldDecorator('phoneNumber')(<Input />)
            }
          </FormItem>
          <Divider />
          <FormItem
            {...formItemLayout}
            label='Profile Photo'
            extra='Profile photo should be min. 128x128 in resolution.'>
            {
              getFieldDecorator('avatar')(
                <Upload
                  name='avatar'
                  listType='picture-card'
                  showUploadList={false}
                  // action='//jsonplaceholder.typicode.com/posts/'
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt='avatar' /> : <UploadButton isLoading={isLoading} />}
                </Upload>
              )
            }
          </FormItem>
          <Divider />
          <FormItem wrapperCol={{ span: 12, offset: 4 }}>
            <Button type='primary' htmlType='submit'>Update Profile</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

const Wrapper = Form.create()(Profile)

export default Wrapper
