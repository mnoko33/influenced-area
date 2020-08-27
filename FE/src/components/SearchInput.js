import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
  const { address, setAppAddress, searchByaddress, searchByGPS } = props;
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.stopPropagation();
      searchByaddress();
    } else if (e.key === "Escape") {
      e.stopPropagation();
      setAppAddress('');
    }
  }

  return (
    <div className="search-input-wrapper">
      <div className="search-input">
        <input
          autoFocus={true}
          name="searchInput"
          id="search-input"
          placeholder="도로명 주소를 입력해주세요"
          value={address}
          onChange={(e) => {
            setAppAddress(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button 
          id="search-btn"
          onClick={searchByaddress}
        >
          <span role="img" aria-label="">🔍</span>
        </button>
        <div className="search-hint">
          입력하신 주소로 장소를 검색합니다.
        </div>
        <button
          id="geoloc-btn"
          onClick={searchByGPS}
        >
          <span role="img" aria-label="">🚩</span>
        </button>
        <div className="geoloc-hint">
          현재 디바이스의 GPS값으로 주소를 검색합니다.
        </div>
      </div>
    </div>
  )
}

export default SearchInput;