import { Form, Input, Typography } from 'antd';
import React from 'react';
import { CustDeclItemsType } from '../CustDecl';
const { Title } = Typography;

interface CusDeclItemDetailProps {
  item: CustDeclItemsType;
  handleChange: (item: CustDeclItemsType) => void;
}

const CusDeclItemDetail: React.FC<CusDeclItemDetailProps> = ({ item, handleChange }) => {
  const [form] = Form.useForm<CustDeclItemsType>();
  console.log('Rendering CusDeclItemDetail:', item.itemId);

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log('handleBlur CusDeclItemDetail');
    const fieldName = e.target.id as keyof CustDeclItemsType;
    console.log(fieldName, item[fieldName], form.getFieldValue(fieldName));
    if (item[fieldName] !== form.getFieldValue(fieldName)) {
      console.log('handleChange CusDeclItemDetail', form.getFieldsValue());
      const values = form.getFieldsValue();
      handleChange(values);
    }
  };

  return (
    <div className="cus-decl-item-detail">
      <Title level={2}>Customs Declaration Item Detail</Title>
      <Form form={form} layout="vertical" initialValues={item} onBlur={handleBlur} size="small">
        <Form.Item name="itemId" label="Item ID:">
          <Input name="itemId" readOnly />
        </Form.Item>
        <Form.Item
          name="itemName"
          label="Item Name:"
          rules={[
            { required: true, message: 'Item Name is required' },
            { min: 2, message: 'Item Name must be at least 2 characters' },
            { max: 20, message: 'Item Name must not exceed 20 characters' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="hsCode" label="HS Code:">
          <Input />
        </Form.Item>
        <Form.Item name="itemDescription" label="Item Description:">
          <Input />
        </Form.Item>
        <Form.Item name="itemQuantity" label="Item Quantity:">
          <Input />
        </Form.Item>
        <Form.Item name="itemPrice" label="Item Price:">
          <Input />
        </Form.Item>
        <Form.Item name="itemTotal" label="Item Total:">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CusDeclItemDetail;
