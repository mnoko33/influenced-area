import React from 'react';
import './SearchResult.css';
import ResultChart from './ResultChart';
import Loading from './Loading';

const SearchResult = (props) => {
  const { result, isLoading } = props;
  return (
    <div className="search-result-wrapper">
      {
        isLoading 
          ? <Loading />
          : result.data && result.data
            ? <ResultChart address={result.address} data={result.data}/>
            : false
      }
    </div>
  )
}

// props인 result와 isLoading이 변했을 때만 리렌더링하도록 React.memo 사용
export default React.memo(SearchResult);