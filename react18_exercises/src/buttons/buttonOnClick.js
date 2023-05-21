function ButtonOnClick() {
  // button click handler
  const onButtonClick = () => {
    alert("I am clicked!");
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

export default ButtonOnClick;
