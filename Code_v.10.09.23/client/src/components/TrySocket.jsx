import { Grid } from "@mui/material";

import { useEffect, useRef, useState } from "react";

const TrySocket = () => {
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowMessage(true);
  };

  return (
    <>
      <Grid item md={12}>
        {!showMessage ? (
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
            <button>Sign in</button>
          </form>
        ) : (
          <MessageInterface name={name} />
        )}
      </Grid>
    </>
  );
};

export default TrySocket;

const MessageInterface = (props) => {
  const [payload, setPayload] = useState({
    sender: props.name.toLowerCase(),
    message: "",
    // command: "",
  });

  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const chatContainerRef = useRef();

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/getnumber/1`);

    socket.onopen = function (event) {
      // socket.send(JSON.stringify({ text: { command: "fetch_messages" } }));
      console.log("WebSocket is open now.");
    };

    socket.onmessage = function (event) {
      const get_data = JSON.parse(event.data);
      console.log(get_data);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: get_data.text.sender,
          message: get_data.text.message,
        },
      ]);
      // console.log("message receieved", get_data.text);
    };

    socket.onclose = function (event) {
      console.log("Server closed unexpectedly");
    };

    setSocket(socket);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      socket.send(JSON.stringify({ text: payload }));
      console.log("success");
    } catch (error) {
      console.log(error);
    }

    setPayload({ ...payload, message: "" });
  };

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  // Call scrollToBottom whenever the component updates
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <h2>Hello, {props.name}.</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={payload.message}
          cols="30"
          rows="5"
          onChange={(e) =>
            setPayload({
              ...payload,
              message: e.target.value,
              command: "new_message",
            })
          }
        />
        <button type="submit">Send</button>
      </form>

      <div
        ref={chatContainerRef}
        style={{
          width: "500px",
          height: "300px",
          overflowY: "scroll",
        }}
      >
        {messages.length > 0 ? (
          messages.map((item, idx) => {
            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: item.sender === props.name ? "left" : "right",
                  flexDirection:
                    item.sender === props.name ? "row" : "row-reverse",
                }}
              >
                <p>
                  {item.sender !== props.name && ":"} {item.sender}{" "}
                  {item.sender === props.name && ":"}
                </p>
                <p>{item.message}</p>
              </div>
            );
          })
        ) : (
          <p>No messages yet. Start now.</p>
        )}
      </div>
    </>
  );
};
