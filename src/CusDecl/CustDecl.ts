export interface CustDeclType {
  id: number;
  header: CustDeclHeaderType;
  transportation: CustDeclTransportationType;
  invoice: CustDeclInvoiceType;
  items: CustDeclItemsType[];
}

export interface CustDeclHeaderType {
  declarationNo: string;
  declarationDate: string;
  status: string;
  noOfItems: number;
  totalAmount: number;
}

export interface CustDeclTransportationType {
  modeOfTransport: string;
  vesselName: string;
  carrierName: string;
  portOfLoading: string;
  portOfExit: string;
}

export interface CustDeclInvoiceType {
  invoiceNo: string;
  invoiceDate: string;
  invoiceAmount: number;
}

export interface CustDeclItemsType {
  itemId: number;
  itemName: string;
  hsCode: string;
  itemDescription: string;
  itemQuantity: number;
  itemPrice: number;
  itemTotal: number;
}
