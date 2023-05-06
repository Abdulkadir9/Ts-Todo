import React from "react";

type IInpProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (op: boolean) => void;
  updateState: boolean;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input: React.FC<IInpProps> = ({
  updateState,
  setUpdateState,
  todo,
  setTodo,
  addTodo,
}) => {
  const inpRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="m-4 flex-col justify-center align-middle">
      <input
        className="w-72 text-black font-medium outline-none border-none
         transition-all active:scale-95 focus:border-violet-800 focus:border-2
        rounded px-1 py-2 text-lg"
        ref={inpRef}
        value={todo}
        onChange={(txt) => setTodo(txt.target.value)}
        type="text"
        placeholder="Todo yaz..."
      />
      <button
        className=" bg-gray-600 font-medium rounded w-20 h-11 ml-3
        transition-all active:scale-90 active:bg-gray-400 text-lg"
        onClick={() => {
          if (!inpRef.current?.value.match(/^[\s\n\r]*$/)) {
            if (!updateState) {
              addTodo(true);
              inpRef.current?.focus();
            } else {
              addTodo(false);
              setUpdateState(false);
              inpRef.current?.focus();
            }
          } else {
            inpRef.current.value = "";
            inpRef.current.focus();
          }
        }}
      >
        {updateState ? "Değiştir" : `Ekle`}
      </button>
    </div>
  );
};

export default Input;
