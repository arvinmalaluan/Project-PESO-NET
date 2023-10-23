import {
  Avatar,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Popper,
} from "@mui/material";
import { Stack, TextField, Typography } from "@mui/material";

import { smile, cirle_plus, send } from "../../templates/image_imports";
import { useEffect, useState } from "react";
import { createNewConvo, getProfiles } from "../../context/CRUD_Operations";
import jwtDecode from "jwt-decode";

const CreateNew = ({ existing, set }) => {
  const [payload, setPayload] = useState({});
  const [userList, setUserList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  const height_setter = window.innerHeight;
  const open = Boolean(anchorEl);

  useEffect(() => {
    getProfiles()
      .then((data) => {
        setUserList(data);
        setCopyList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setPayload({ ...payload, search_name: value });

    const new_details = [...userList];
    const searched_users = new_details.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setCopyList(searched_users);

    value.length > 0 ? setAnchorEl(e.currentTarget) : setAnchorEl(null);
  };

  const handleRemove = () => {
    setSearchItem("");
    setPayload({ ...payload, receiver: "" });
  };

  return (
    <>
      <Stack sx={{ height: "100%" }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            height: height_setter * 0.1,
            paddingInline: 2,
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Typography fontSize={14} fontWeight={400}>
            To:
          </Typography>
          {searchItem ? (
            <Chip label={searchItem} onDelete={handleRemove} />
          ) : (
            <TextField
              placeholder="Search here"
              autoComplete="new-password"
              size="small"
              value={payload.search_name ? payload.search_name : ""}
              onChange={handleChange}
              fullWidth
              InputProps={{ sx: { fontSize: 14, borderRadius: 3 } }}
            />
          )}
        </Stack>

        <Stack sx={{ height: height_setter * 0.8 }}></Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ height: height_setter * 0.1, paddingInline: 2 }}
        >
          <FileFooter
            pay={payload}
            set={setPayload}
            setActive={set}
            search={searchItem}
          />
        </Stack>
      </Stack>

      <SearchList
        open={open}
        list={copyList}
        setSearch={setSearchItem}
        pay={payload}
        setPay={setPayload}
        anchorEl={anchorEl}
        setAnc={setAnchorEl}
        existing={existing}
        set={set}
      />
    </>
  );
};

export default CreateNew;

const FileFooter = ({ pay, set, setActive, search }) => {
  const filter_color =
    "invert(22%) sepia(79%) saturate(2464%) hue-rotate(233deg) brightness(102%) contrast(87%)";

  const handleSend = () => {
    createNewConvo(pay)
      .then((data) => setActive(data.custom_key))
      .catch((error) => console.log(error));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSend();
      set({ ...pay, message: "" });
    }
  };

  const handleChange = (e) => {
    set({ ...pay, message: e.target.value });
  };

  return search ? (
    <>
      <IconButton size="small">
        <img src={cirle_plus} alt="" />
      </IconButton>

      <TextField
        size="small"
        fullWidth
        placeholder="Type your message here"
        value={pay.message}
        onChange={handleChange}
        onKeyDown={handleEnter}
        autoComplete="off"
        inputProps={{
          style: { fontSize: 14 },
        }}
        InputProps={{
          sx: { borderRadius: 5 },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" sx={{ marginRight: "-8px" }}>
                <img
                  src={smile}
                  style={{
                    height: "20px",
                    width: "20px",
                    filter: filter_color,
                  }}
                  alt=""
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <IconButton onClick={handleSend}>
        <img
          src={send}
          style={{ filter: filter_color }}
          className="icon-20x20"
          alt=""
        />
      </IconButton>
    </>
  ) : null;
};

const SearchList = (props) => {
  const { user_id } = jwtDecode(localStorage.getItem("token"));
  const handleClick = (name, account) => {
    let existing_convo = [];
    const custom_key =
      user_id > account
        ? user_id.toString() + account.toString()
        : account.toString() + user_id.toString();

    for (let items of props.existing) {
      existing_convo.push(items.custom_key);
    }

    if (existing_convo.includes(custom_key)) {
      props.set(custom_key);
    } else {
      props.setPay({
        ...props.pay,
        receiver: account,
        search_name: "",
        custom_key: custom_key,
        sender: user_id,
      });
      props.setSearch(name);
      props.setAnc(null);
    }
  };

  return (
    <Popper
      open={props.open}
      anchorEl={props.anchorEl}
      placement="bottom-start"
    >
      <Stack
        sx={{
          bgcolor: "white",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          p: 1,
          mt: 1,
          width: "300px",
          height: "400px",
          overflowY: "scroll",
        }}
      >
        {props.list.map((item, idx) => {
          return (
            <MenuItem
              key={idx}
              onClick={() => handleClick(item.name, item.account)}
            >
              <Avatar sx={{ height: 40, width: 40 }} />
              <Typography fontSize={14} ml={1.5} fontWeight={300}>
                {item.name}
              </Typography>
            </MenuItem>
          );
        })}
      </Stack>
    </Popper>
  );
};
