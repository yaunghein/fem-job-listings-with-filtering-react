import { useContext } from 'react';
import { Context } from '../Context';
import { Wrapper, DropdownItem, Empty } from './FilterDropdown-Styles';
import ItachiTrollFace from '../../images/itachi-troll-face.png';

const FilterDropdown = ({ setValue, dropdownTexts }) => {
  const { addFilter } = useContext(Context);

  return (
    <Wrapper>
      {dropdownTexts.length > 0 ? (
        dropdownTexts.map((text, index) => (
          <DropdownItem
            key={index}
            onClick={() => {
              addFilter(text);
              setValue('');
            }}>
            {text}
          </DropdownItem>
        ))
      ) : (
        <Empty>
          <p>We don't have such category at the moment.</p>
          <img src={ItachiTrollFace} alt='' />
        </Empty>
      )}
    </Wrapper>
  );
};

export default FilterDropdown;
