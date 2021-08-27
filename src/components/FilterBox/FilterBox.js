import { useState, useEffect, useRef, useCallback } from 'react';
import { Wrapper, FilterPillsWrapper, FilterInput, ClearButton, Placeholder } from './FilterBox-Styles';
import { FilterPill, FilterDropdown } from '..';
import { useContext } from 'react';
import { Context } from '../Context';

const FilterBox = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const { filters, setFilters, clearAllFilters } = useContext(Context);
  const addValueToFilter = useCallback(
    e => {
      if (e.key === 'Enter') {
        if (value.length > 0) {
          setFilters(prevFilters => [...prevFilters, { id: new Date().getTime(), text: value }]);
          setValue('');
          inputRef.current.blur();
        }
      }
    },
    [setFilters, value]
  );

  useEffect(() => {
    document.addEventListener('keyup', addValueToFilter);
    return () => document.removeEventListener('keyup', addValueToFilter);
  }, [addValueToFilter]);

  return (
    <Wrapper onClick={() => inputRef.current.focus()}>
      <FilterPillsWrapper>
        {filters.map(filter => (
          <FilterPill key={filter.id} filter={filter} />
        ))}
      </FilterPillsWrapper>
      {value.length === 0 && filters.length === 0 && <Placeholder>Search your dream job...</Placeholder>}
      <FilterInput
        type='text'
        autoComplete='off'
        size={value.length ? value.length : 1}
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
      />
      {value.length > 0 && <FilterDropdown value={value} setValue={setValue} />}

      <ClearButton onClick={clearAllFilters}>Clear</ClearButton>
    </Wrapper>
  );
};

export default FilterBox;
