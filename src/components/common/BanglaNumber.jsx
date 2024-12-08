 export default function BanglaNumber ({ number }) {
    const banglaNumber = new Intl.NumberFormat("bn-BD").format(number);
   return (
       <>{banglaNumber}</>
   );

};