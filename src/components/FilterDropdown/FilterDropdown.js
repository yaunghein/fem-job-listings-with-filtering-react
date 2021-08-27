import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import { pureDropdownTexts } from '../../helpers';
import { Wrapper, DropdownItem, Empty } from './FilterDropdown-Styles';
import ItachiTrollFace from '../../images/itachi-troll-face.png';

const FilterDropdown = ({ value, setValue }) => {
  const [dropdownTexts, setDropdownTexts] = useState([]);
  const { allJobs, addFilter } = useContext(Context);
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
