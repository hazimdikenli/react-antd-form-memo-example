import React from 'react';
import { CustDeclItemsType, CustDeclType } from '../CustDecl';
import { Divider, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface CusDeclItemListProps {
  items: CustDeclType['items'];
  handleDelete: (itemId: number) => void;
  handleSelectItem: (itemId: number) => void;
}
const CusDeclItemList: React.FC<CusDeclItemListProps> = ({ items, handleDelete, handleSelectItem }) => {
  console.log('Rendering CusDeclItemList');
  const columns = [
    {
      title: 'Item ID',
      dataIndex: 'itemId',
      key: 'itemId',
    },
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'HS Code',
      dataIndex: 'hsCode',
      key: 'hsCode',
    },
    {
      title: 'Item Description',
      dataIndex: 'itemDescription',
      key: 'itemDescription',
    },
    {
      title: 'Quantity',
      dataIndex: 'itemQuantity',
      key: 'itemQuantity',
    },
    {
      title: 'Price',
      dataIndex: 'itemPrice',
      key: 'itemPrice',
    },
    {
      title: 'Total',
      dataIndex: 'itemTotal',
      key: 'itemTotal',
    },
    {
      title: 'Action',
      render: (record: CustDeclItemsType) => (
        <>
          <a onClick={() => handleDelete(record.itemId)}>
            <DeleteOutlined />
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              console.log('selected item', record);
              handleSelectItem(record.itemId);
            }}
          >
            <EditOutlined />
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={items} rowKey={(record) => record.itemId} columns={columns} />
    </>
  );
};

export default CusDeclItemList;
