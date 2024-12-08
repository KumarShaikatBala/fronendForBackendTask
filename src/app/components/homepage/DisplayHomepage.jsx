"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Thumbnil from "@public/card1.png";
import Thumbnil2 from "@public/card2.png";

export default function DisplayHomepage({ item }) {
  const [homepagetv, sethomepagetv] = useState({
    name: "notice",
    data: [
      {
        name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
        date: "1/18/2024",
 
      },
      {
        name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
        date: "1/18/2024",
   
      },
      {
        name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
        date: "1/18/2024",
    
      },
      {
        name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
        date: "1/18/2024",
        
      },
      {
        name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
        date: "1/18/2024",
      },
      {
        name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
        date: "1/18/2024",

      },
      // ... other data objects
    ],
  });

  useEffect(() => {
    if (item.name === "tutorials") {
      sethomepagetv({
        name: "tutorials",
        //label: "টিউটোরিয়াল",
        data: [
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: "Thumbnil2",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: "Thumbnil2",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: "Thumbnil2",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: "Thumbnil2",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: "Thumbnil2",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: "Thumbnil2",
          },
          // ... other data objects
        ],
      });
    } else if (item.name === "Notice") {
      sethomepagetv({
        name: "notice",
       // label:"Notive",
        data: [
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন ",
            date: "1/18/2024",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন ",
            date: "1/18/2024",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন ",
            date: "1/18/2024",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন ",
            date: "1/18/2024",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন ",
            date: "1/18/2024",
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন ",
            date: "1/18/2024",
          },
          // ... other data objects
        ],
      });
    } else if (item.name === "manuals") {
      sethomepagetv({
        name: "manuals",
        //label:"ম্যানুয়াল",
        data: [
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: Thumbnil2,
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: Thumbnil2,
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: Thumbnil2,
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: Thumbnil2,
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: Thumbnil2,
          },
          {
            name: "বাংলাদেশ নৌপরিবহন অধিদপ্তর, বাংলাদেশে নৌপরিবহন সংক্রান্ত কাজে রয়েছে একটি সরকারী",
            date: "1/18/2024",
            thumbnil: Thumbnil2,
          },
        ],
      });
    }
  console.log()
  }, [item]);

  const renderNoticeRows = () => {
    return homepagetv.data.map((list, index) => (
      <tr key={index}>
        <td className="border rounded md:border">
          <Link href="notice/1">
            <div className="flex flex-col gap-2 md:gap-3 p-2 bg-[#F6F6F6]  md:pt-6 w-full md:px-8  xl:px-6 xl:pt-3">
              <p className="text-baseliteblue text-[9px] md:text-sm font-bold xl:font-semibold tracking-wide 2xl:tracking-wider">
                {list.name}
              </p>
              <span className="text-[9px] font-[400] xl:pb-1 xl:text-xs">
                {list.date}
              </span>
            </div>
          </Link>
        </td>
      </tr>
    ));
  };

  const renderManualsGrid = () => {
    return homepagetv.data.map((list, index) => (
      <div key={index} className="">
        <Link href="/manuals/1">
          <div className="flex flex-col gap-2 md:gap-4 p-6 border rounded">
            <Image src={list.thumbnil} alt='Manuals Thumbnil'/>
            <p className="text-xs font-bold text-gray-600">{list.name}</p>
            <span className="text-xs font-semibold text-gray-600">
              {list.date}
            </span>
          </div>
        </Link>
      </div>
    ));
  };

  const renderTutorialsGrid = () => {
    return homepagetv.data.map((list, index) => (
      <div key={index} className="">
        <Link href="/tutorials/1">
          <div className="flex flex-col gap-2 md:gap-4 p-6 border rounded">
            <Image src={Thumbnil} alt='manuals thumbnill' />
            <p className="text-xs font-bold text-gray-600">{list.name}</p>
            <span className="text-xs font-semibold text-gray-600">
              {list.date}
            </span>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="px-4 py-4 w-full">
      <table className="w-full border-separate border-spacing-y-5 px-2 md:border-collapse rounded md:shadow-none md:rounded-0">
        <tbody>{homepagetv.name === "notice" && renderNoticeRows()}</tbody>
      </table>

      <div
        className={`grid grid-cols-3 gap-4 p-2 w-full ${
          homepagetv.name === "manuals" ? "" : "hidden"
        }`}
      >
        {homepagetv.name === "manuals" && renderManualsGrid()}
      </div>

      <div
        className={`grid grid-cols-3 gap-4 p-2 w-full ${
          homepagetv.name === "tutorials" ? "" : "hidden"
        }`}
      >
        {homepagetv.name === "tutorials" && renderTutorialsGrid()}
      </div>
    </div>
  );
}
