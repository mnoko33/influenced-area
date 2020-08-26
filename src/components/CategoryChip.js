import React, { useRef } from 'react';
import './CategoryChip.css';
import { codeMap } from '../utils';

const CategoryChip = (props) => {
  const { category, setAppCategoryList } = props
  return (
    <div 
      className={category.selected ? 'category-chip selected' : 'category-chip'}
      onClick={() => setAppCategoryList(category.id)}
    >
      {codeMap[category.code]}
    </div>
  )
}

export default CategoryChip;