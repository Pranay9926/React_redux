import React from "react";

export default function Debouncing() {
  // const [value, setValue] = React.useState('')
  const [disabled, setDisabled] = React.useState(false)
  let value = 0;

//   const getValue = () => {
//     console.log("this is your fuction", value++);
//   };
//   const handleChange = (call, d) => {
//     let timer;
//     return function (...agrs) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         call();
//       }, d);
//     };
//   };

//   const best = handleChange(getValue, 1000);

  let time;
  const handleChange = () => {
      clearTimeout(time);
      time = setTimeout(()=>{
          console.log("hello all",value++);
      },500)
  }


  let val = 0;
  let time1;
  const handleClick = () => {
        setDisabled(true);
        // document.getElementById("btn").disabled=true;
      clearTimeout(time1);
      time1 = setTimeout(() => {
        console.log("Clicked button",disabled);
        setDisabled(false);
        // document.getElementById("btn").disabled = false;
      }, 1000);
  }

  return (
    <div className="mt-10">
      <input onChange={handleChange} />
      <button
        id="btn"

        onClick={handleClick}
        className={`ml-4 p-2 border-[2px] ${
          disabled ? `bg-[blue]` : `bg-[red]`
        }  text-white border-black`}
      >
        Click me
      </button>
    </div>
  );
}
