import { DropdownSelectValue } from '../components/input/DropDownSelect';

export const getDropdownOptionsFromEnum = <T>(enumOptions: object) => {
  const options: DropdownSelectValue<T>[] = [];
  Object.keys(enumOptions).forEach((it) => {
    const valueKey = it as keyof typeof enumOptions;
    options.push({ value: enumOptions[valueKey], label: it });
  });
  return options;
};

export const parseDropdownOptionToEnum = <T>(
  option: DropdownSelectValue<T>,
  dropdownEnum: object,
) => {
  if (option && option.value) {
    return dropdownEnum[option.value as keyof typeof dropdownEnum];
  }
  return undefined;
};

export default { getDropdownOptionsFromEnum };
