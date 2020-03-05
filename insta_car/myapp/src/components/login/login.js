import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  Button
} from 'antd';
import './login.css';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Login = (props) => {
  const [mail, setMail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [flag, setFlag] = useState(0);
  const [dest, setdest] = useState('');
  const [price, setPrice] = useState('');
  const [lang, setLang] = useState('');
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    //console.log(props.location.state.price); 
    fetch('http://localhost:5000/api/Application', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destination: props.location.state.destination,
        price: props.location.state.price,
        language: props.location.state.language,
        name: name,
        mail: mail,
        mobile: mobile
      })
    }).then((Response) => Response.json()) 
    .then((findresponse) => 
    {
      console.log(findresponse);
      setMail(findresponse.data.mail);
      setName(findresponse.data.name);
      setMobile(findresponse.data.mobile);
      setdest(findresponse.data.destination);
      setPrice(findresponse.data.price);
      setLang(findresponse.data.language);
      setFlag(1);
    })
    .catch( err => console.log(err));
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '91'
      }}
      layout = "inline"
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        onChange={e => setMail(e.target.value)}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input value={mail}/>
      </Form.Item>

      <Form.Item
        name="fullName"
        onChange={e => setName(e.target.value)}
        label={
          <span>
            Fullname
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your Fullname!',
            whitespace: true,
          },
        ]}
      >
        <Input value={name}/>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        onChange={e => setMobile(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
          value={mobile}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    {(flag===1) ? <div><b>BOOKING CONFIRMATION</b><br/>
        Name : {name}<br />
        Mobile : {mobile}<br />
        EMail : {mail}<br />
        Language Of Driver : {lang}<br />
        Price : {price}<br />
        Destination : {dest}</div> : null}
    </div>
  );
};

export default withRouter(Login);