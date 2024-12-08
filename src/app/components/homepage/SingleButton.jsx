import Image from "next/image";
import Link from "next/link";
import leftArrow from "@public/icon/buttonarrowRight.svg";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import "./SingleButton.css";
export default function SingleButton(props) {
  return (
    <div className="">
      <Link href={props?.details?.link}>
        <div
          className={`${props.details.color}   buttonEffect flex items-center  border border-blue-400 justify-between rounded-[1.9px] cursor-pointer   md:rounded  md:p-1   lg:p-3 xl:p-3.5 2xl:p-7  group `}
        >
          <p className="  text-[9px] px-1 shrink-0 font text-baseblue  md:text-xs md:px-2 xl:font-semibold lg:text-md  xl:text-lg 2xl:font-bold  2xl:text-2xl">
            {props?.details?.name}
          </p>
          <div className="flex items-center text-baseblue  p-2  text-2xl xl:text-4xl ">
            <div className="text-base opacity-80 md:text-xl xl:text-xl 2xl:text-2xl">
              <EastRoundedIcon />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
