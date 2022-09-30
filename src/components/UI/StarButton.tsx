import star from "../../icons/star.png";
interface Props {
  openFavourites(): void
}

function StarButton({openFavourites}: Props) {
  return (
    <div 
    onClick={()=>{
      openFavourites()
    }}
    className="text-center absolute pt-auto shadow-md flex justify-center items-center content-center text-neutral-300 bold ml-10 mt-[100px] w-10 h-10 rounded-full cursor-pointer bg-emerald-800  z-40 left-0 top-0">
      <p className="transition-all duration-500 hover:rotate-180 ">
        <img
          className="w-5 h-5"
          style={{ filter: "invert(0.75)" }}
          src={star}
          alt="star"
        />
      </p>
    </div>
  );
}

export default StarButton;
