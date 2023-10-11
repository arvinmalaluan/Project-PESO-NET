const check_position = (name, idx, message_list) => {
  let styles = {
    maxWidth: "50%",
    height: "auto",
    paddingBlock: "8px",
    "& .MuiChip-label": {
      display: "block",
      whiteSpace: "normal",
    },
  };

  const def_start = idx !== 0;
  const def_length = message_list.length - 1 !== idx;

  const check_prev_you = def_start
    ? message_list[idx - 1].name === "You"
    : false;

  const check_next_you = def_length
    ? message_list[idx + 1].name === "You"
    : false;

  const check_prev_me = def_start ? message_list[idx - 1].name === "Me" : false;

  const check_next_me = def_length
    ? message_list[idx + 1].name === "Me"
    : false;

  if (name === "Me") {
    if (def_length && def_start) {
      if (check_prev_me && check_next_me && name === "Me") {
        styles = {
          // if chat is at the middle
          ...styles,
          borderRadius: "16px 5px 5px 16px",
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      } else if (check_prev_me && name === "Me") {
        styles = {
          // if chat is at the bottom
          ...styles,
          borderRadius: "16px 5px 16px 16px",
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      } else if (check_next_me && name === "Me") {
        styles = {
          // if chat is at the top
          ...styles,
          borderRadius: "16px 16px 5px 16px",
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      } else if (
        message_list[idx - 1].name === "You" &&
        message_list[idx + 1].name === "You"
      ) {
        styles = {
          ...styles,
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      }
    }

    if (idx === 0) {
      if (check_next_me && name === "Me") {
        styles = {
          ...styles,
          borderRadius: "16px 16px 16px 5px",
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      }
    }

    if (message_list.length - 1 === idx) {
      if (check_prev_me && name === "Me") {
        styles = {
          ...styles,
          borderRadius: "5px 16px 16px 16px",
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      } else if (check_prev_you && name === "Me") {
        styles = {
          ...styles,
          bgcolor: "#4f46e5",
          color: "#fff",
        };
      }
    }
  }

  if (name === "You") {
    if (def_length && def_start) {
      if (check_prev_you && check_next_you && name === "You") {
        styles = { ...styles, borderRadius: "5px 16px 16px 5px" };
      } else if (check_prev_you && name === "You") {
        styles = { ...styles, borderRadius: "5px 16px 16px 16px" };
      } else if (check_next_you && name === "You") {
        styles = { ...styles, borderRadius: "16px 16px 16px 5px" };
      }
    }

    if (idx === 0) {
      if (check_next_you && name === "You") {
        styles = { ...styles, borderRadius: "16px 16px 16px 5px" };
      } else if (check_next_you && name === "You") {
        styles = { ...styles, borderRadius: "16px 16px 16px 5px" };
      }
    }

    if (message_list.length === idx) {
      if (check_prev_you && name === "You") {
        styles = { ...styles, borderRadius: "5px 16px 16px 16px" };
      }
    }
  }

  return styles;
};

export default check_position;
