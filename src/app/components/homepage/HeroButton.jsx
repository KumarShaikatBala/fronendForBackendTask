import SingleButton from "./SingleButton";

export default function HeroButton() {
  const ButtonList = [
    {
      name: "পরীক্ষার্থী আবেদন",
      color: "bg-[#F1D1D0]",
      link: "/registration",
    },
    {
      name: "সার্টিফিকেট যাচাইকরণ",
      color: "bg-[#F0ECE3]",
      link: "/verify-certificate",
    },
    {
      name: "প্রশিক্ষণ কেন্দ্র",
      color: "bg-[#F0ECE3]",
      link: "/registration",
    },
    {
      name: "সার্ভে অপারেটর",
      color: "bg-[#E0DEF4]",
      link: "/registration",
    },
  ];
  return (
    <div className="grid  grid-cols-2  mx-auto  gap-y-2 gap-x-2 md:gap-x-2 md:mx-0 md:pt-0  md:gap-y-2 lg:gap-x-6 lg:gap-y-4  xl:gap-x-8 xl:gap-y-6 2xl:gap-x-6 2xl:gap-y-5 xl:pt-0  ">
      {ButtonList.map((list) => {
        return (
          <div key={list.name}>
            <SingleButton details={list} />
          </div>
        );
      })}
    </div>
  );
}
