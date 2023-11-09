/* eslint-disable @next/next/no-img-element */

import React, { useContext, useEffect } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Link from "next/link";
import { AppMenuItem } from "../../types/types";

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  // ko or en
  const locale = layoutConfig.location.code;

  // : AppMenuItem[]
  const menuItemsByLocale = {
    ko: [
      {
        label: "홈",
        items: [{ label: "대시보드", icon: "pi pi-fw pi-home", to: "/" }],
      },
      {
        label: "컴포넌트",
        icon: "pi pi-fw pi-briefcase",
        to: "/pages",
        items: [
          {
            label: "데이터테이블",
            icon: "pi pi-fw pi-globe",
            to: "/dataTable",
          },
        ],
      },
      {
        label: "계층구조",
        items: [
          {
            label: "서브메뉴 1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "서브메뉴 1.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 1.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 1.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 1.1.3", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "서브메뉴 1.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 1.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
          {
            label: "서브메뉴 2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "서브메뉴 2.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 2.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 2.1.2", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "서브메뉴 2.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 2.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
        ],
      },
    ],
    en: [
      {
        label: "Home",
        items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
      },
      {
        label: "Component",
        icon: "pi pi-fw pi-briefcase",
        to: "/pages",
        items: [
          {
            label: "DataTable",
            icon: "pi pi-fw pi-globe",
            to: "/dataTable",
          },
        ],
      },
      {
        label: "계층구조",
        items: [
          {
            label: "서브메뉴 1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "서브메뉴 1.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 1.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 1.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 1.1.3", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "서브메뉴 1.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 1.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
          {
            label: "서브메뉴 2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "서브메뉴 2.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 2.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "서브메뉴 2.1.2", icon: "pi pi-fw pi-bookmark" },
                ],
              },
              {
                label: "서브메뉴 2.2",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "서브메뉴 2.2.1", icon: "pi pi-fw pi-bookmark" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const model = menuItemsByLocale[locale] || [];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
