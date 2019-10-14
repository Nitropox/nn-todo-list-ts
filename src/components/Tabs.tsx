/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

interface TabsProps {
  activeTab: number;
  switchTab: Function;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, switchTab }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 0 ? " active" : null}`}
          href="#"
          onClick={() => switchTab(0)}
        >
          Wszystkie
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 1 ? " active" : null}`}
          href="#"
          onClick={() => switchTab(1)}
        >
          Wykonane
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 2 ? " active" : null}`}
          href="#"
          onClick={() => switchTab(2)}
        >
          Niewykonane
        </a>
      </li>
    </ul>
  );
};
