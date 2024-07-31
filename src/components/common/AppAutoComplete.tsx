import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate Chocolate Chocolate ChocolateChocolateChocolateChocolate' },
  { value: 'strawberry', label: 'StrawberryStrawberryStrawberryStrawberryStrawberryStrawberryStrawberry' },
  { value: 'vanilla', label: 'VanillaVanillaVanillaVanillaVanillaVanillaVanilla' },
];

function AppAutoComplete(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={isFocused ? 'label-select focused' : 'label-select'}>
      <Select
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={[]}
        options={options}
        isMulti
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        classNames={{
          control: (state) => (!state.isFocused ? 'select-in-valid' : ''),
        }}
      />
    </div>
  );
}

export default AppAutoComplete;
