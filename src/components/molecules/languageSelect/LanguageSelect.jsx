import Select from 'react-select';

import options from './selectOptions';
import selectStyles from './selectStyles';

const LanguageSelect = () => {
    return (
        <Select
            options={options}
            styles={selectStyles}
            defaultValue={options[0]}
            isSearchable={false}
        />
    );
};

export default LanguageSelect;
