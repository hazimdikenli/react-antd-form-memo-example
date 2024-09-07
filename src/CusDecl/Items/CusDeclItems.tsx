import React, { useCallback, useState } from 'react';
import { CustDeclItemsType, CustDeclType } from '../CustDecl';
import CusDeclItemList from './CusDeclItemList';
import CusDeclItemDetail from './CusDeclItemDetail';

interface CusDeclItemsProps {
  items: CustDeclType['items'];
  handleChange: (items: CustDeclType['items']) => void;
}

const CusDeclItems: React.FC<CusDeclItemsProps> = ({ items, handleChange }) => {
  console.log('Rendering CusDeclItems');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const deleteHandler = useCallback(
    (itemId: number) => {
      console.log('Deleting item with ID:', itemId);
      const updatedItems = items.filter((item) => item.itemId !== itemId);
      handleChange(updatedItems);
    },
    [items, handleChange]
  );
  const handleSelectItem = useCallback(
    (itemId: number) => {
      console.log('Selected item with ID:', itemId);
      setSelectedItemId(itemId);
    },
    [setSelectedItemId]
  );

  const handleEditItem = useCallback(
    (updatedItem: CustDeclItemsType) => {
      const updatedItems = items.map((v) => (v.itemId === updatedItem.itemId ? updatedItem : v));
      handleChange(updatedItems);
    },
    [handleChange, items]
  );
  const selectedItem = selectedItemId ? items.find((item) => item.itemId === selectedItemId) : null;

  return (
    <div className="cus-decl-items">
      <h2>Customs Declaration Items</h2>
      <CusDeclItemList items={items} handleDelete={deleteHandler} handleSelectItem={handleSelectItem} />
      {/* Add your header form fields here */}
      {selectedItem && <CusDeclItemDetail key={selectedItemId} item={selectedItem} handleChange={handleEditItem} />}
    </div>
  );
};

export default CusDeclItems;
