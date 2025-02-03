import Select from 'react-select';

import { options } from './selectOptions';
import { customStyles } from './selectStyles';

export const LanguageSelect = () => {
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      isSearchable={false}
    />
  );
};
