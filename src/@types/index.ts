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
