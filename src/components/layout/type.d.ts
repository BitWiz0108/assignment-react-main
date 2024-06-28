export interface ISubOption {
  label: string;
  url: string;
  icon: React.ReactNode;
}

export interface INavOptions {
  label: string;
  subOptions: ISubOption[];
}
