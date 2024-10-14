import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { ReactNode } from "react";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export interface CustomLayoutProps {
  children: ReactNode;
}

export interface ContentLayoutProps {
  children: ReactNode;
  breadcrumbItems: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
  colorBgContainer: string;
  borderRadiusLG: number;
}

export interface ICustomSiderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  items: ItemType<MenuItemType>[];
  handleClick: (e: { key: string; keyPath: any[]; domEvent: any }) => void
}
