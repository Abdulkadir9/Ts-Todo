import React from "react";
import { ITodos } from "../types/Type";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
type Props = {
  todos: ITodos[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number) => void;
};

const Message: React.FC<Props> = ({ updateTodo, deleteTodo, todos }) => {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-3/4 border-b-gray-400">
        {todos
          .map((todo, i) => (
            <div
              key={i}
              className="w-full justify-between flex text-lg font-medium select-none
              hover:bg-slate-700 m-2 rounded py-3 px-1 transition-all"
            >
              <span className="flex truncate text-ellipsis text-center">
                {todo.message}
              </span>
              <div className="flex">
                <span
                  className="mx-5 cursor-pointer bg-sky-600 text-white transition-all
                  active:bg-transparent active:text-sky-600 active:scale-125 px-2 py-2 rounded-full"
                  onClick={() => {
                    updateTodo(todo.id);
                  }}
                >
                  <FiEdit3 className="text-2xl" />
                </span>
                <span
                  className="mx-5 cursor-pointer bg-red-600 text-white transition-all
                   active:bg-transparent active:text-red-600 active:scale-125 px-2 py-2 rounded-full"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <MdDeleteOutline className="text-2xl" />
                </span>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Message;
