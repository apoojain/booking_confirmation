import React from 'react';
import { Select  } from 'antd';
import 'antd/dist/antd.css';
import './OneWay.css';
import { Form,DatePicker } from 'antd';
import { Button } from 'antd';
import Login from '../login/login.js'
import { withRouter } from "react-router-dom";

class OneWay extends React.Component {
  constructor(props){  
    super(props);  
    this.state={
      destination: 'SD',
    }
  } 
onChange = (value) => {
  console.log(`selected ${value}`);
}

onBlur = () => {
  console.log('blur');
}

onFocus = () => {
  console.log('focus');
}

onSearch = (val) => {
  console.log('search:', val);
}
destChange = (e) => {
  console.log(e)
    this.setState({
      destination:e
    })
  }
priceChange = (e) => {
  this.setState({
    price : e
  })
}
langChange = (e) => {
  this.setState({
    language : e
  })
}
openLogin = (item) => {
  this.props.history.push({
    pathname : "/login",
    state: this.state
  });
}
    
    render(){
        const { Option } = Select;
        return(
            <Form layout = "vertical">
              <Form.Item
                name="origin"
                label="Origin"
                rules={[
              {
                required: true,
                message: 'Required',
              }
                  ]}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Origin`"
                optionFilterProp="children"
                // onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                defaultValue="Bangalore"
                disabled="true"
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
            </Select>
            </Form.Item>

            <Form.Item 
            name="destination"
            label="Destination"
            rules={[
          {
            required: true,
            message: 'Required',
          }
              ]}>
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Destination"
            optionFilterProp="children"
            onChange={e => this.destChange(e)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            defaultValue={this.state.destination}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="SD">Select Destination</Option>          
            <Option value="OOTY">OOTY</Option>
            <Option value="MUMBAI">MUMBAI</Option>
            <Option value="CHENNAI">CHENNAI</Option>
            <Option value="PUNE">PUNE</Option>
        </Select>
        </Form.Item>
        <Form.Item
        name="departDate"
        label="Depart Date"
        rules={[
          {
            required: true,
            message: 'Required',
          }
        ]}>
        <DatePicker onChange={this.onChange} size="large"/></Form.Item>
        <Form.Item 
        name="returnDate"
        label="Return Date"
        rules={[
          {
            required: true,
            message: 'Required',
          }
        ]}><DatePicker onChange={this.onChange} disabled = "true" size="large" /></Form.Item>
        <Form.Item
          name="price"
          label="Price"
        rules={[
          {
            required: true,
            message: 'Required',
          }
              ]}>
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Price"
            optionFilterProp="children"
            onChange={e => this.priceChange(e)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >        
            <Option value="15 Rs/KM">15 Rs/KM</Option>
            <Option value="18 Rs/KM">18 Rs/KM</Option>
            <Option value="21 Rs/KM">21 Rs/KM</Option>
        </Select>
        </Form.Item>
        <Form.Item 
         name="language"
         label="Language Of Driver"
        rules={[
          {
            required: true,
            message: 'Required',
          }
              ]}>
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Language"
            optionFilterProp="children"
            onChange={this.langChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >        
            <Option value="English">English</Option>
            <Option value="Kannada">Kannada</Option>
            <Option value="Hindi">Hindi</Option>
        </Select>
        </Form.Item>
        <Button type="primary" onClick = {(key) => this.openLogin(key)}>BOOK</Button>
        </Form>
        );
    }
}

export default withRouter(OneWay);