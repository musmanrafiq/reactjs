import { useState } from "react";

function InputValueDisplay() {
  const [userName, setUserName] = useState("");

  const userNameChangeHandler = (evnt) => {
    const userNameValue = evnt.target.value;
    setUserName(userNameValue);
  };

  return (
    <div>
      <input type="text" value={userName} onChange={userNameChangeHandler} />

      <p>{userName}</p>
    </div>
  );
}

export default InputValueDisplay;
