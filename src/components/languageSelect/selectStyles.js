const customStyles = {
    container: (provided) => ({
        ...provided,
        width: 110,
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
        whiteSpace: 'normal',
        overflow: 'visible',
        textOverflow: 'initial',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'white',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
        '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
        },
    }),
};

export default customStyles;
