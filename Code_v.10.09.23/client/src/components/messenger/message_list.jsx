import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import jwtDecode from "jwt-decode";
import MessTemp from "../common/message_template";

const MessageList = ({
  active,
  set,
  setDetails,
  setAccList,
  accList,
  messageList,
  setMessageList,
}) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:8000/get-my-convo/getmessages/${user_id}`
    );

    socket.onopen = function (event) {
      socket.send(JSON.stringify({ text: { action: "fetch_all" } }));
      console.log("WebSocket is open now.");
    };

    socket.onmessage = function (event) {
      const get_data = JSON.parse(event.data);

      let new_array = [];

      get_data.text.map((item) => {
        const temp =
          item.involve_one === user_id ? item.involve_two : item.involve_one;

        new_array.push(temp);
      });

      setMessages(new_array);
      setAccList(new_array);
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };
  }, []);

  useEffect(() => {
    // if (messages.length >= accList.length) {
    //   null;
    // } else {
    //   setMessages(accList);
    // }

    messages.length <= accList.length && setMessages(accList);
  }, [accList]);

  return (
    <>
      {messages ? (
        messages.map((item, idx) => {
          return (
            <MessTemp
              key={idx}
              set={set}
              id={item}
              active={active}
              setD={setDetails}
              messageList={messageList}
              setMessageList={setMessageList}
            />
          );
        })
      ) : (
        <Typography fontSize={16}>No messages found</Typography>
      )}
    </>
  );
};

export default MessageList;
