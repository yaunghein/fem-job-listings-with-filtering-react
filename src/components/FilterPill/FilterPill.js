import { Wrapper, Pill, RemoveButton } from './FilterPill-Styles';
import RemoveIcon from '../../images/icon-remove.svg';
import { useContext } from 'react';
import { Context } from '../Context';

const FilterPill = ({ filter }) => {
  const { removeFilter } = useContext(Context);
  return (
    <Wrapper>
      <Pill>{filter.text}</Pill>
      <RemoveButton onClick={() => removeFilter(filter)}>
        <img src={RemoveIcon} alt='remove filter' />
      </RemoveButton>
    </Wrapper>
  );
};

export default FilterPill;
