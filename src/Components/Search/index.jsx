import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Group, Input, SearchIcon } from "./style";

import { getSearchList, clearSearchList} from "../../redux/actions/musicAction";


function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(!search) {
      dispatch(clearSearchList());
    }
  }, [search])
  
  return (
    <Group>
      <SearchIcon src="/icons/search.svg" />
      <Input
        type="search"
        id="myInput"
        value={search}
        onKeyDown={(evento) => {
          if (evento.key === 'Enter' || evento.keyCode === 13) {
            dispatch(getSearchList(search))
          }
        }}
        onChange={(evento) => {
          setSearch(evento.target.value);
        }}
        placeholder="Search"
      />
    </Group>
  );
}

export default Search;
