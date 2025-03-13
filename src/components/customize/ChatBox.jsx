
import React from "react";
import { IoMdSend } from "react-icons/io";

const ChatBox = () => {
  return (
    <div>
        <div className="mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Chat With Us</h1>
      </div>
        <div className="w-full border p-4">
      

      {/* Chat messages */}
      <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
        {/* User message */}
        <div className="flex justify-start">
          <div>
          <div className="max-w-xs p-3 rounded-lg bg-gray-200">
            <p>Hi, How are you?</p>
          </div>
          <span className="text-sm text-gray-500 ml-2">11:15 AM</span>
          </div>
        </div>

        {/* Bot message */}
        <div className="flex justify-end">
          <div>
          <div className="max-w-xs p-3 rounded-lg bg-black text-white">
            <p>Hey! 👋 I saw your post about going on a road trip next week. Where are you headed?</p>
          </div>
          <span className="text-sm text-gray-500 ml-2 flex justify-end">11:05 AM</span>
          </div>
        </div>
      </div>

      {/* Message input and send button */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="w-full p-[10px] border border-gray-300 "
          placeholder="Type a message"
        />
        <button className="p-3 text-xl bg-black text-white  hover:bg-gray-600">
          
            <IoMdSend />

        </button>
      </div>
    </div>
    </div>
  );
};

export default ChatBox;
