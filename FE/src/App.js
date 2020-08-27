import React, { useState } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import Selector from './components/Selector';
import api from './api';

function App() {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([
    { id:1, code: 'cv', selected: true },
    { id:2, code: 'cf', selected: true },
    { id:3, code: 'rs', selected: true },
    { id:4, code: 'hp', selected: true },
    { id:5, code: 'sm', selected: true },
    { id:6, code: 'pc', selected: true },
  ])
  
  const setAppCategoryList = id => {
    setCategoryList(categoryList => categoryList
      .map(category => category.id === id ? { ...category, selected: !category.selected } : category)
    )
  }

  /* 
    TODO: address가 빈 문자열일 때, 유저에게 경고하는 UI
    TODO: categortList중 selected된 chip이 0개일 때, 유저에게 경고하는 UI
  */
  const searchByaddress = () => {
    if (address && address.length) {
      setIsLoading(true);
      api.getResultByAddress(
        address, 
        categoryList.reduce((acc, c) => c.selected ? [...acc, c.code] : acc, [])
        ).then(result => {
          setIsLoading(false);
          setAddress(result.address);
          setResult(result);
        })
    }
  }

  const searchByGPS = () => {
    if ('geolocation' in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(pos => {
        const [x, y] = [pos.coords.latitude, pos.coords.longitude];
        api.getResultByCoord(
          {x, y}, 
          categoryList.reduce((acc, c) => c.selected ? [...acc, c.code] : acc, [])
        ).then(result => {
          setIsLoading(false);
          setAddress(result.address);
          setResult(result);
        })
      })
    }
  }

  return (
    <div className="App">
      <Header />
      <SearchInput 
        address={address} 
        setAppAddress={setAddress}
        searchByaddress={searchByaddress}
        searchByGPS={searchByGPS}
      />
      <Selector 
        categoryList={categoryList} 
        setAppCategoryList={setAppCategoryList} 
      />
      <SearchResult 
        result={result}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
