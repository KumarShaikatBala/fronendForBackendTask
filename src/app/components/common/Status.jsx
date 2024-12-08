"use client";
// Import necessary dependencies
import React from 'react';
import { useAuth } from "@/context/AuthContext";

// Define the Status component
export default function Status({ value }) {
    // Fetch authentication context

    const { statuses, isLoading } = useAuth();

    // Define a mapping between status IDs and their corresponding colors
    const statusColors = {
        "1": "bg-green-500",    // চলমান (Green)
        "2": "bg-yellow-500",   // বিবেচনাধীন (Yellow)
        "3": "bg-blue-500",     // সম্পন্ন (Blue)
        "4": "bg-gray-500",     // স্থগিত (Gray)
        "5": "bg-red-500",      // বাতিল (Red)
        "6": "bg-purple-500",   // অনুমোদনের জন্য অপেক্ষা করছে (Purple)
        "7": "bg-orange-500",   // পর্যালোচনা অধীনে (Orange)
        "8": "bg-pink-500",     // বিলম্বিত (Pink)
        "9": "bg-indigo-500",   // বরাদ্দ করা হয়েছে (Indigo)
        "10": "bg-cyan-500",    // শুরু না (Cyan)
        "11": "bg-teal-500",    // অসম্পূর্ণ (Teal)
        "12": "bg-lime-500",    // প্রত্যাখ্যাত (Lime)
        "13": "bg-emerald-500", // গৃহীত (Emerald)
        "14": "bg-blue-900",// পর্যালোচনা (Blue Gray)
        "15": "bg-rose-500",    // রক্ষণাবেক্ষণের অধীনে (Rose)
        "16": "bg-violet-500",  // সমাধান করা (Violet)
        "17": "bg-amber-500",   // আলোচনায় (Amber)
        "18": "bg-lime-500",    // তদন্ত করছে (Lime)
        "19": "bg-teal-500",    // অবরুদ্ধ (Teal)
        "20": "bg-orange-500",  // অনুমোদিত (Orange)
        "21": "bg-cyan-500",    // প্রতিক্রিয়ার অপেক্ষায় (Cyan)
        "22": "bg-amber-500",   // সারিতে (Amber)
        "23": "bg-blueGray-500",// আলোচনায় (Blue Gray)
        "24": "bg-rose-500",    // পর্যালোচনা মুলতুবি (Rose)
        "25": "bg-indigo-500",  // পরীক্ষার জন্য প্রস্তুত (Indigo)
        "26": "bg-pink-500",    // বাস্তবায়িত (Pink)
        "27": "bg-red-500",     // সম্পদ জন্য অপেক্ষা (Red)
        "28": "bg-green-500",   // সিদ্ধান্তের অপেক্ষায় (Green)
        "29": "bg-gray-500",    // মুক্তি পেয়েছে (Gray)
        "30": "bg-blue-500",    // উন্নয়নের অধীনে (Blue)
        "31": "bg-yellow-500",  // সংরক্ষণাগারভুক্ত (Yellow)
        "32": "bg-teal-500",    // সমন্বিত (Teal)
        "33": "bg-orange-500",  // অপেক্ষা নিশ্চিতকরণ (Orange)
        "34": "bg-pink-500",    // স্থগিত (Pink)
        "35": "bg-indigo-500",  // হিসাব পরীক্ষা করা (Indigo)
        "36": "bg-yellow-500",  // অমীমাংসিত (Yellow)
        "37": "bg-blueGray-500",// চূড়ান্তকরণে (Blue Gray)
        "38": "bg-emerald-500", // অ্যাসাইনমেন্ট প্রত্যাহার করা হয়েছে (Emerald)
        "39": "bg-lime-500",    // ডকুমেন্টেশনের অপেক্ষায় (Lime)
        "40": "bg-emerald-500", // প্রত্যাহার করা হয়েছে (Emerald)
        "41": "bg-rose-500",    // রিফ্যাক্টরিংয়ের অধীনে (Rose)
        "42": "bg-purple-500",  // বৈধকরণে (Purple)
        "43": "bg-cyan-500",    // অনুমতি বিচারাধীন (Cyan)
        "44": "bg-blueGray-500",// গ্রাহক দ্বারা পর্যালোচনা অধীনে (Blue Gray)
        "45": "bg-amber-500",   // খসড়ার মধ্যে (Amber)
        "46": "bg-lime-500",    // গ্রাহক দ্বারা প্রত্যাহার (Lime)
        "47": "bg-emerald-500", // একত্রিত হয়েছে (Emerald)
        "48": "bg-teal-500",    // গ্রাহকের কাছ থেকে অনুমোদনের অপেক্ষায় (Teal)
        "49": "bg-orange-500",  // গ্রাহক দ্বারা অনুমোদিত (Orange)
        "50": "bg-indigo-500",  // পেমেন্ট সম্পন্ন হয়েছে (Indigo)
        "51": "bg-green-900",   // সফলতা (Darkest Green)
        "52": "bg-red-900",     // অবৈতনিক (Darkest Red)
        "53": "bg-purple-900",  // বাতিল করুন (Darkest Purple)
        "54": "bg-blue-900",    // কাউন্টার নির্বাচন, অবৈতনিক (Darkest Blue)
        "55": "bg-amber-900",   // ত্রুটি ডেটা প্রক্রিয়া নয় (Darkest Amber)
        "56": "bg-gray-900",    // ব্যর্থ হয় (Darkest Gray)
        "57": "bg-green-900",   // খোলা (Darkest Green)
        "58": "bg-emerald-900", // আবার খোলা হয়েছে (Darkest Emerald)
        "59": "bg-orange-900",    // প্রতিক্রিয়ার অপেক্ষায় (Darkest Cyan)
        "60": "bg-green-900",    // উত্তর দিয়েছেন (Darkest Teal)
        "61": "bg-lime-900",    // বিক্রেতার জন্য অপেক্ষা (Darkest Lime)
        "62": "bg-red-700",// বন্ধ (Darkest red)
        "63": "bg-red-500",      // বর্ধিত (Darkest Red)
        "64": "bg-indigo-900",   // নকল (Darkest Indigo)
    };

  
    // Initialize name and colorClass variables
    let name = '';
    let colorClass = '';

    // Check if statuses are loaded and value is defined
    if (statuses && value !== undefined && statuses[value.toString()]) {
        const status = statuses[value.toString()];
        name = status.name_bn;
        // Get the color class from the mapping
        colorClass = statusColors[value.toString()] || 'bg-gray-500'; // Default to gray if no matching color is found
    }

    // Return the Status component UI
    return (
        <>
            {isLoading && <p>Loading...</p>}
            <span className={`rounded px-1.5 py-0 text-xs text-white drop-shadow ${colorClass}`}> {name}</span>
        </>
    )
}
