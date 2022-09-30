import docs from "../icons/docs.png";
import sheets from "../icons/sheets.png";
import slides from "../icons/slides.png";

function GoogleTools() {
  return (
    <>
      <div className="flex justify-center">
        <a href="https://docs.google.com/document/" target={'_blank'}><img
          src={docs}
          alt="docs"
          className="w-[70px] cursor-pointer hover:scale-125 transition-all duration-300"
        /></a>
        <a href="https://docs.google.com/spreadsheets/" target={'_blank'}><img
          src={sheets}
          alt="sheets"
          className="w-[70px] cursor-pointer hover:scale-125 transition-all duration-300"
        /></a>
        <a href="https://docs.google.com/presentation/" target={'_blank'}><img
          src={slides}
          alt="slides"
          className="w-[70px] cursor-pointer hover:scale-125 transition-all duration-300"
        /></a>
      </div>
    </>
  );
}

export default GoogleTools;
