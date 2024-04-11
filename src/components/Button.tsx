const Button = ({btnText, onClick}:{btnText:string, onClick: () => void}) => {
  return (
    <>
      <button className="animated-button" onClick={onClick}>
        <span>{btnText}</span>
        <span></span>
      </button>
    </>
  );
};
export default Button;
