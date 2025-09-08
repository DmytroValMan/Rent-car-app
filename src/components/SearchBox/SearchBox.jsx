import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const nameValue = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(changeFilter(value)),
    300
  );

  const handleSearsh = (evt) => {
    debounced(evt.target.value);
  };

  return (
    <>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name or number
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        defaultValue={nameValue}
        onChange={handleSearsh}
      ></input>
    </>
  );
};

export default SearchBox;
