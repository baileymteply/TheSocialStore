import { TextField, Wrapper, SearchIcon, SearchBarComps, SearchResults, ResultItem } from './GeneralCompStyles/SearchBar.styles';
import '../../styles/SearchBar.css';
import SearchIconImg from '@material-ui/icons/Search';

const SearchBar = ({ placeholder, data }) => {
        return (
                <Wrapper>
                        <SearchBarComps>
                                <SearchIcon >
                                        <SearchIconImg className="search-img" />
                                </SearchIcon>
                                <TextField placeholder={placeholder} /* data={ProductData} */ />
                        </SearchBarComps>
                        <SearchResults>
                                {data.map((value, key) => {
                                        return (
                                                <ResultItem className="search-itme" href={value.link} target="_blank" rel="noreferrer">
                                                        <p>
                                                                {value.title}
                                                        </p>
                                                </ResultItem>
                                        )
                                })}
                        </SearchResults>
                </Wrapper>
        );
}

export default SearchBar;