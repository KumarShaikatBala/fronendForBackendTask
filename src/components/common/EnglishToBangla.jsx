const EnglishToBanglaNumber = ({ number }) => {
    if(!number){
        return "";
    }
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().replace(/\d/g, (d) => banglaNumbers[+d]);
}

export default EnglishToBanglaNumber;
