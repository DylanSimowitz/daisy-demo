type Option<T = any> = {
  label: string;
  value: string;
  extra?: T;
};

export default Option;
