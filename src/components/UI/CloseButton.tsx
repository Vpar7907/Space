interface Props {
  handleClose(event: React.MouseEvent<HTMLAnchorElement>): void;
}

function CloseButton({ handleClose }: Props) {
  return (
    <>
      <a
        href="/"
        className="bg-red-600 inline-flex justify-center text-[12px] pb-[1.25em] pl-[0.1em] pr-[0.25em] pt-[0em] w-[1.5em] h-[1.5em] rounded-full right-0 hover:bg-red-500 hover:cursor-pointer"
        data-char="x"
        onClick={handleClose}
      >
        {" "}
      </a>
    </>
  );
}

export default CloseButton;
