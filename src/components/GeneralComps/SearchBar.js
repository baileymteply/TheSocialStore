import './GeneralComps.css'
import React, { useState } from 'react';
import SearchIconImg from '@material-ui/icons/Search';
import ClearIconImg from '@material-ui/icons/Clear';

const SearchBar = ({ placeholder, data }) => {

    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (ev) => {
        const searchWord = ev.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord == "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const clearFilter = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return (
        <div className="search-wrapper-ele">
            <div className="search-comps">
                {filteredData.length == 0 ?
                    <div className="search-icon">
                        <SearchIconImg className="search-img" />
                    </div>
                    :
                    <div className="clear-icon" >
                        <ClearIconImg  onClick={clearFilter()}/>
                    </div>
                }
                <input className="search-text-field" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
            </div>
            {filteredData.length != 0 && (
                <div className="search-results">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <div className="search-result-item" className="search-itme" href={value.link} target="_blank" rel="noreferrer">
                                <p>
                                    {value.title}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;