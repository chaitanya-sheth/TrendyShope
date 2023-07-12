"use client"
import React, { useState } from "react";
import { Data } from "@/data/Data";
import '../styles/mobile.css'
export default function Searchbarmobile() {
    const [query,setQuery] = useState();
    console.log(Data.filter(item => item.name.toLocaleLowerCase().includes(query)));
    return (
        <div className="mobileSearchbar width_100">
        <form className="mobilecustomSearchbar">
            <div style={{position:"relative"}}>
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
                    className="mobileSearchBox width_100"
                    onChange={(e)=>setQuery(e.target.value)}

                />
            </div>
        </form>
        </div>
    );
}