import { Wrapper, FilterPillsWrapper, FilterInput, ClearButton } from './FilterBox-Styles';
import { FilterPill } from '..';
import { useContext } from 'react';
import { Context } from '../Context';

const FilterBox = () => {
  const { filters, clearAllFilters } = useContext(Context);
  return (
    <Wrapper>
      <FilterPillsWrapper>
        {filters.map(filter => (
          <FilterPill key={filter.id} filter={filter} />
        ))}
      </FilterPillsWrapper>
      {/* <FilterInput /> */}
      <ClearButton onClick={clearAllFilters}>Clear</ClearButton>
    </Wrapper>
  );
};

export default FilterBox;
