import { TextField, Wrapper, SearchIcon, SearchBarComps, SearchResults, ResultItem, ClearIcon } from './GeneralCompStyles/SearchBar.styles';
import '../../styles/SearchBar.css';
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
        <Wrapper>
            <SearchBarComps>
                {filteredData.length == 0 ?
                    <SearchIcon >
                        <SearchIconImg className="search-img" />
                    </SearchIcon>
                    :
                    <ClearIcon >
                        <ClearIconImg  onClick={clearFilter()}/>
                    </ClearIcon>
                }
                <TextField placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
            </SearchBarComps>
            {filteredData.length != 0 && (
                <SearchResults>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <ResultItem className="search-itme" href={value.link} target="_blank" rel="noreferrer">
                                <p>
                                    {value.title}
                                </p>
                            </ResultItem>
                        )
                    })}
                </SearchResults>
            )}
        </Wrapper>
    );
}

export default SearchBar;