import React, { useCallback, useMemo, useState } from 'react';
import { Button, Tabs } from 'antd';
import CusDeclHeader from './CusDeclHeader';
import CusDeclTransportation from './CusDeclTransportation';
import CusDeclInvoice from './CusDeclInvoice';
import CusDeclItems from './Items/CusDeclItems';
import { CustDeclHeaderType, CustDeclInvoiceType, CustDeclItemsType, CustDeclTransportationType, CustDeclType } from './CustDecl';

const { TabPane } = Tabs;

const CusDeclMain: React.FC = () => {
  const [custDecl, setCustDecl] = useState<CustDeclType>({
    id: 1,
    header: {
      declarationNo: '',
      declarationDate: '',
      status: '',
      noOfItems: 0,
      totalAmount: 0,
    },
    transportation: {
      modeOfTransport: '',
      vesselName: '',
      carrierName: '',
      portOfLoading: '',
      portOfExit: '',
    },
    invoice: {
      invoiceNo: '',
      invoiceDate: '',
      invoiceAmount: 0,
    },
    items: [
      {
        itemId: 1,
        itemName: '001',
        hsCode: '0101.01',
        itemDescription: '001',
        itemQuantity: 0,
        itemPrice: 0,
        itemTotal: 10,
      },
      {
        itemId: 2,
        itemName: '002',
        hsCode: '0202.02',
        itemDescription: '002',
        itemQuantity: 0,
        itemPrice: 0,
        itemTotal: 20,
      },
      {
        itemId: 3,
        itemName: '003',
        hsCode: '0303.01',
        itemDescription: '003',
        itemQuantity: 0,
        itemPrice: 0,
        itemTotal: 30,
      },
    ],
  });
  const { header, transportation, invoice, items } = custDecl;
  const handleHeaderChange = useCallback((value: CustDeclHeaderType) => {
    setCustDecl((cur) => ({ ...cur, header: value }));
  }, []);
  const handleTransportationChange = useCallback((value: CustDeclTransportationType) => {
    setCustDecl((cur) => ({ ...cur, transportation: value }));
  }, []);
  const handleInvoiceChange = useCallback((value: CustDeclInvoiceType) => {
    setCustDecl((cur) => ({ ...cur, invoice: value }));
  }, []);
  const handleItemsChange = useCallback((value: CustDeclItemsType[]) => {
    setCustDecl((cur) => ({ ...cur, items: value }));
  }, []);
  const MemoizedCusDeclTransportation = useMemo(() => React.memo(CusDeclTransportation), []);
  const MemoizedCusDeclInvoice = useMemo(() => React.memo(CusDeclInvoice), []);
  const MemoizedCusDeclHeader = useMemo(() => React.memo(CusDeclHeader), []);
  const MemoizedCusDeclItems = useMemo(() => React.memo(CusDeclItems), []);
  console.log('Rendering CusDeclMain');

  return (
    <div className="cus-decl-main">
      <h1>Customs Declaration</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Header" key="1">
          <MemoizedCusDeclHeader header={custDecl.header} handleChange={handleHeaderChange} />
        </TabPane>
        <TabPane tab="Transportation" key="2">
          <MemoizedCusDeclTransportation transportation={transportation} handleChange={handleTransportationChange} />
        </TabPane>
        <TabPane tab="Invoice" key="3">
          <MemoizedCusDeclInvoice invoice={invoice} handleChange={handleInvoiceChange} />
        </TabPane>
        <TabPane tab="Items" key="4">
          <MemoizedCusDeclItems items={items} handleChange={handleItemsChange} />
        </TabPane>
      </Tabs>
      <Button type="primary">Submit</Button>
      <div>
        <span>declarationNo: {header.declarationNo} </span>
        {/* <span>declarationDate: {header.declarationDate} </span>
      <span>status: {header.status} </span> */}
        <br />
        <span>carrier: {transportation.carrierName} </span>
        <br />
        <span>quantity: {items.reduce((acc, cur) => acc + Number(cur.itemQuantity ?? 0), 0)} </span>
      </div>
      <h3>README</h3>
      <p>DevTools Console'u acip, filitre kutusuna Rendering yazarak hangi sayfalarin re-render oldugunu gorebilirsiniz. Burada mumkun oldugu kadar React.memo kullanarak, veri degismiyorsa, hicbir componentin re-render olmamasini sagladik. Form-update su sekilde calisiyor, form'un onBlur'unde degisiklik varsa eger, state'i guncelliyor, bu degisiklik yukari ciktigi icin ana component'den asagiya rerender olmasini sagliyor, buradaki useMemo bloklari contenti degismemis componentlerin rerender olmasini engelliyor. Bu da yuksek kalemli ve fazla inputlu bir form'da performans kaybetmemizi onluyor. Ben burada ana hatlariyla ornekleme yapmak istedim, isler bundan daha komplike olabilir, o konulari da beraber cozeriz</p>
      <h3>Backend'e gonderilecek olan veri</h3>
      <div>
        Backend'e gonderilecek olan veri, ayrica optimize edilebilir. Bir patch mutasyonu hazirlayabiliriz, ```
        <pre>mutation ( updateCusDecl(id: 1, input: ( header: ( declarationNo: "123456", declarationDate: "2024-01-01", status: "Pending", noOfItems: 3, totalAmount: 1000, ), deletedItems: [1, 2], newItems: [ ( itemId: 4, itemName: '004', hsCode: '0404.01', itemDescription: '004', itemQuantity: 0, itemPrice: 0, itemTotal: 40, )], updatedItems: [ ( itemId: 3, itemName: '003', hsCode: '0303.01', itemDescription: '003', itemQuantity: 0, itemPrice: 0, itemTotal: 30, ))</pre>
        ```
      </div>
    </div>
  );
};

export default CusDeclMain;
