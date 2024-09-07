import { Form, Input, Select, Typography } from 'antd';
import React from 'react';
import { CustDeclType } from './CustDecl';

const { Title, Text } = Typography;

interface CusDeclHeaderProps {
  header: CustDeclType['header'];
  handleChange: (header: CustDeclType['header']) => void;
}

const CusDeclHeader: React.FC<CusDeclHeaderProps> = ({ header, handleChange }) => {
  const [form] = Form.useForm();

  console.log('Rendering CusDeclHeader');

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log('handleBlur CusDeclHeader');
    const fieldName = e.target.id as keyof CustDeclType['header'];
    if (header[fieldName] !== form.getFieldValue(fieldName)) {
      console.log('handleChange CusDeclHeader', form.getFieldsValue());
      const values = form.getFieldsValue();
      handleChange(values);
    }
  };

  return (
    <div className="cus-decl-header">
      <Title level={2}>Customs Declaration Header</Title>
      <Form form={form} layout="vertical" initialValues={header} onBlur={handleBlur} size="small">
        <Form.Item
          name="declarationNo"
          label="Declaration No:"
          rules={[
            { required: true, message: 'Declaration No. is required' },
            { min: 4, message: 'Declaration No. must be at least 4 characters' },
            { max: 10, message: 'Declaration No. must not exceed 10 characters' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="declarationDate" label="Declaration Date:">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="Status:">
          <Select>
            <Select.Option value="draft">Draft</Select.Option>
            <Select.Option value="submitted">Submitted</Select.Option>
            <Select.Option value="approved">Approved</Select.Option>
            <Select.Option value="rejected">Rejected</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      <Text>Number of Items: {header.noOfItems}</Text>
      <br />
      {/* <Text>Total Amount: ${header.totalAmount?.toFixed(2)}</Text> */}
    </div>
  );
};

export default CusDeclHeader;
