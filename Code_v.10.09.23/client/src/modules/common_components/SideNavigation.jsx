import { MenuItem, Stack, Typography } from "@mui/material";
import { default_data } from "../../templates/templates";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const SideNavigation = () => {
  const { user_role } = jwtDecode(localStorage.getItem("token"));

  const { navigation_data, job_related_data, user_preference } = default_data;
  const { navigation_recruiters, job_related_recruiters } = default_data;
  const { navigation_admin } = default_data;

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [items, setItems] = useState();
  const [titles, setTitles] = useState();

  // Initialization of data
  const active_fcolor =
    "invert(22%) sepia(79%) saturate(2464%) hue-rotate(233deg) brightness(102%) contrast(87%)";
  const inactive_fcolor =
    "invert(75%) sepia(13%) saturate(367%) hue-rotate(163deg) brightness(86%) contrast(80%)";
  const active_bgcolor = "#1F2937";

  // Logics
  const handeClick = (path, name) => {
    navigate(`${path}`);
  };

  useEffect(() => {
    if (user_role === 1) {
      setTitles(["Navigation", "User Preference"]);
      setItems([navigation_admin, user_preference]);
    } else if (user_role === 2) {
      setTitles(["Navigation", "Job Related", "User Preference"]);
      setItems([navigation_data, job_related_data, user_preference]);
    } else {
      setTitles(["Navigation", "Job Related", "User Preference"]);
      setItems([
        navigation_recruiters,
        job_related_recruiters,
        user_preference,
      ]);
    }
  }, []);

  return (
    <Stack
      sx={{
        height: "100%",
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        overflowY: "scroll",
        bgcolor: "#111827",
        color: "#93a3af",
      }}
    >
      <Typography fontWeight={400} pt={2} pl={4}>
        PESO Lipa
      </Typography>

      {titles &&
        titles.map((item, item_idx) => {
          return (
            <Stack key={item_idx} sx={{ paddingInline: 2, pt: 5 }}>
              <Typography fontSize={14} fontWeight={300} mb={1} pl={2}>
                {item}
              </Typography>

              {items &&
                items[item_idx].map((item, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      onClick={() => handeClick(item.path, item.name)}
                      sx={{
                        bgcolor: pathname == item.path && active_bgcolor,
                        color: pathname == item.path && "#4f46e5",
                        "&:hover": {
                          bgcolor: active_bgcolor,
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <img
                          src={item.icon}
                          style={{
                            height: "16px",
                            width: "16px",
                            filter:
                              pathname == item.path
                                ? active_fcolor
                                : inactive_fcolor,
                          }}
                          alt=""
                        />
                        <Typography fontWeight={500}>{item.name}</Typography>
                      </Stack>
                    </MenuItem>
                  );
                })}
            </Stack>
          );
        })}
    </Stack>
  );
};

export default SideNavigation;
