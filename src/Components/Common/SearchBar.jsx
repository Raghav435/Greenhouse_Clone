import React from 'react'
import "../../Styles/SearchBar.css"
// import SearchIcon from "@material-ui/icons/Search"

export default function SearchBar({value, changeInput}) {
  return (
    <div className='searchBar-wrap'>
    {/* <SearchIcon className='searchBar-icon' /> */}
    
    <input
      type='text'
      placeholder='Green House Search Bar'
      value={value}
      onChange={changeInput}
    />
  </div>
  )
}
