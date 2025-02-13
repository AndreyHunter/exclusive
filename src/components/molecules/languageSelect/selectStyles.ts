import type {
  StylesConfig,
  ControlProps,
  OptionProps,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  MenuProps,
  SingleValueProps,
  CSSObjectWithLabel,
  ContainerProps,
  GroupBase,
} from 'react-select';
import { ValueContainerProps, IndicatorsContainerProps } from 'react-select';

import type { OptionType } from './selectOptions';

type GroupType = GroupBase<OptionType>;

export const customStyles: StylesConfig<OptionType, false, GroupType> = {
  container: (
    provided: CSSObjectWithLabel,
    props: ContainerProps<OptionType, false, GroupType>,
  ) => ({
    ...provided,
    width: 110,
    zIndex: 110,
  }),
  control: (provided: CSSObjectWithLabel, props: ControlProps<OptionType, false, GroupType>) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  singleValue: (
    provided: CSSObjectWithLabel,
    props: SingleValueProps<OptionType, false, GroupType>,
  ) => ({
    ...provided,
    color: 'white',
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'initial',
  }),
  indicatorSeparator: (
    provided: CSSObjectWithLabel,
    props: IndicatorSeparatorProps<OptionType, false, GroupType>,
  ) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (
    provided: CSSObjectWithLabel,
    props: DropdownIndicatorProps<OptionType, false, GroupType>,
  ) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided: CSSObjectWithLabel, props: MenuProps<OptionType, false, GroupType>) => ({
    ...provided,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  }),
  option: (provided: CSSObjectWithLabel, state: OptionProps<OptionType, false, GroupType>) => ({
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
