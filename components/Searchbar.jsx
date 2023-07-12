"use client";
import React from "react";
import { Data } from "@/data/Data";
import { useState } from "react";
import "../styles/desktop.css";
import "../styles/globals.css";
import "../styles/mobile.css";
import Link from "next/link";
export default function Searchbar() {
  const [query, setQuery] = useState();
  const handleItemClick = () => {
    query("");
    setQuery(""); // Clear the search box
  };

  return (
    <div className="searchbar">
      <form className="searchbar2 d_flex align_items_center searchBarPosition" >
        <div
          // className="searchBarPosition"
          style={{ position: "relative" }}
        >
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobileSearchIcon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
          <input
            type="text"
            placeholder="Search here"
            className="searchBox"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {query && (
        <div className="searchData">
          <ul className="searchData2">
            {Data.filter((item) =>
              item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            ).map((item) => (
              <li className="searchResult" key={item.id}>
                <Link href={item.url} onClick={handleItemClick}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        )}
      </form>
    </div>
  );
}
