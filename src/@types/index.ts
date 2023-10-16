export type SettingPrePages =
  | "/wallet"
  | "/settings"
  | "/general"
  | "/members"
  | "/domain-and-analytics"
  | "/categories"
  | "/navigation"
  | "/blog-transfer";

export type SettingItemType = {
  title: string;
  isTitle?: boolean;
  size?: "small" | "default";
  preTitle?: boolean;
  preTitleWithIcon?: boolean;
  icon?: (_: {
    className: string;
    width?: string;
    height?: string;
    strokeWidth?: string;
  }) => React.ReactNode;
  Component?: React.ElementType<{ key: number }>;
  path?: SettingPrePages;
};

export type UserType = {
  display_name?: string | null;
  username?: string;
  email?: string;
  id?: number;
  password?: string;
};

export type AuthResponse = {
  data: { token: string; user: UserType };
  message: "error" | "success";
};

export type IIP_ADDRESS = {
  asn: string;
  city: string;
  continent: string;
  country: string;
  country_area: string;
  country_calling_code: string;
  country_capital: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_population: number;
  country_tld: string;
  currency: string;
  currency_name: string;
  in_eu: boolean;
  ip: string;
  languages: string;
  latitude: number;
  longitude: number;
  network: string;
  org: string;
  postal?: number;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
};
