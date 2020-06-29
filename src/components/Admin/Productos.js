import React from 'react';
import {Col, Card, Container, Row, CardColumns} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a ><EditOutlined />Edit</a>,
      },
    {
      
      dataIndex: '',
      key: 'x',
      render: () => <a ><DeleteOutlined />Delete</a>,
    },
  ];
  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
 
const Productos = () => {
    return (<> 
    <p className="titulo_product_main">Productos</p>
     
     <Container>
     <Table
      columns={columns}
      expandable={{
        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
        rowExpandable: record => record.name !== 'Not Expandable',
      }}
      dataSource={data}
    />
     </Container>
      
    
    
    
    
    </>);
}
 
export default Productos;