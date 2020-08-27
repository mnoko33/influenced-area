import React from 'react';
import './Selector.css';
import CategoryChip from './CategoryChip';

const Selector = (props) => {
  const { categoryList, setAppCategoryList } = props;

  return (
    <div className="selector-wrapper">
      {categoryList.map(category => 
        <CategoryChip 
          key={category.id} 
          category={category}
          setAppCategoryList={setAppCategoryList}
        />)
      }
    </div>
  )
}

export default Selector;