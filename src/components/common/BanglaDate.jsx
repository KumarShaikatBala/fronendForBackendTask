import React from 'react';

export default function BanglaDate({ date }) {
  let formattedDate;
  try {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      throw new Error('Invalid date');
    }
    formattedDate = new Intl.DateTimeFormat('bn-BD', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(parsedDate);
  } catch (error) {
    console.error('Invalid date:', date);
    formattedDate = 'Invalid date';
  }

  return <>{formattedDate}</>;
}
