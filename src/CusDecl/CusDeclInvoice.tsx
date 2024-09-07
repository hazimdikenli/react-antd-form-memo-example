import React from 'react';
import { CustDeclType } from './CustDecl';

interface CusDeclInvoiceProps {
  invoice: CustDeclType['invoice'];
  handleChange: (invoice: CustDeclType['invoice']) => void;
}
const CusDeclInvoice: React.FC<CusDeclInvoiceProps> = ({ invoice, handleChange }) => {
  console.log('Rendering CusDeclInvoice');

  return (
    <div className="cus-decl-invoice">
      <h2>Customs Declaration Invoice</h2>
      {/* Add your header form fields here */}
    </div>
  );
};

export default CusDeclInvoice;
