import React from 'react';
import { Form, Input } from 'antd';
import { CustDeclType } from './CustDecl';

type TransportationType = CustDeclType['transportation'];
interface CusDeclTransportationProps {
  transportation: TransportationType;
  handleChange: (transportation: CustDeclType['transportation']) => void;
}

const CusDeclTransportation: React.FC<CusDeclTransportationProps> = ({ transportation, handleChange }) => {
  console.log('Rendering CusDeclTransportation');

  const [form] = Form.useForm<TransportationType>();

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log('handleBlur CusDeclTransportation');
    const fieldName = e.target.id as keyof CustDeclType['transportation'];
    console.log(fieldName, transportation[fieldName], form.getFieldValue(fieldName));
    if (transportation[fieldName] !== form.getFieldValue(fieldName)) {
      console.log('handleChange CusDeclTransportation', form.getFieldsValue());
      const values = form.getFieldsValue();
      handleChange(values);
    }
  };

  return (
    <div className="cus-decl-transportation">
      <h2>Customs Declaration Transportation</h2>
      <Form form={form} layout="vertical" initialValues={transportation} onBlur={handleBlur} size="small">
        <Form.Item name="mode" label="Mode of Transport">
          <Input />
        </Form.Item>
        <Form.Item
          name="carrierName"
          label="Carrier"
          rules={[
            { required: true, message: 'Carrier is required' },
            { min: 4, message: 'Carrier must be at least 3 characters' },
            { max: 20, message: 'Carrier must not exceed 20 characters' },
          ]}
        >
          <Input placeholder="Burayi doldurun, ana sayfa da degistigini gorun" />
        </Form.Item>
        <Form.Item name="vesselName" label="Vessel Name">
          <Input />
        </Form.Item>
        {/* <Form.Item name="voyageNumber" label="Voyage Number">
          <Input />
        </Form.Item> */}
        <Form.Item name="portOfLoading" label="Port of Loading">
          <Input />
        </Form.Item>
        <Form.Item name="portOfDischarge" label="Port of Discharge">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CusDeclTransportation;
