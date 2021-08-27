import { useState, useEffect, useRef, useCallback } from 'react';
import { Wrapper, FilterPillsWrapper, FilterInput, ClearButton, Placeholder } from './FilterBox-Styles';
import { FilterPill, FilterDropdown } from '..';
import { useContext } from 'react';
import { Context } from '../Context';
import { pureDropdownTexts } from '../../helpers';

const FilterBox = () => {
  const [value, setValue] = useState('');
  const [dropdownTexts, setDropdownTexts] = useState([]);
  const inputRef = useRef(null);
  const { allJobs, filters, setFilters, clearAllFilters } = useContext(Context);
  const addValueToFilter = useCallback(
    e => {
      if (e.key === 'Enter') {
        if (value.length > 0 && dropdownTexts.includes(value)) {
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

  const dropdownTextsArr = allJobs.map(job => {
    return [job.role, job.level, ...job.languages, ...job.tools, job.new && 'New', job.featured && 'Featured'];
  });
  const dropdownTextsReduceArr = dropdownTextsArr.reduce((accumulator, currentValue) => [
    ...accumulator,
    ...currentValue,
  ]);
  const cleanDropdownTexts = pureDropdownTexts(dropdownTextsReduceArr).sort();

  useEffect(() => {
    const updatedDropdownTexts = cleanDropdownTexts.filter(text => text.toLowerCase().includes(value.toLowerCase()));
    setDropdownTexts(updatedDropdownTexts);
  }, [value]);

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
      {value.length > 0 && <FilterDropdown value={value} setValue={setValue} dropdownTexts={dropdownTexts} />}

      <ClearButton
        onClick={() => {
          clearAllFilters();
          setValue('');
          inputRef.current.blur();
        }}>
        Clear
      </ClearButton>
    </Wrapper>
  );
};

export default FilterBox;
