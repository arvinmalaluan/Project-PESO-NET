import PostAddIcon from "@mui/icons-material/PostAdd";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";

const iconStyles = {
  height: "24px",
  width: "24px",
};

const iconStyles2 = {
  height: "20px",
  width: "20px",
};

export const avatarItems = [
  {
    id: "go-to-resume",
    name: "Manage Resume",
    icon: <PostAddIcon style={iconStyles} />,
  },
  {
    id: "go-to-saved",
    name: "My Saved Jobs",
    icon: <BookmarkIcon style={iconStyles2} />,
  },
  {
    id: "go-to-status",
    name: "My Application Status",
    icon: <PunchClockIcon style={iconStyles2} />,
  },
  {
    id: "go-to-settings",
    name: "Settings",
    icon: <SettingsIcon style={iconStyles} />,
  },
  {
    id: "give-feedback",
    name: "Provide Feedback",
    icon: <FeedbackIcon style={iconStyles2} />,
  },
  { id: "logout", name: "Logout", icon: <LogoutIcon style={iconStyles2} /> },
];

export const responsibilities = [
  "Coordinating and executing marketing campaigns to promote products and services.",
  "Creating and curating engaging content for social media platforms.",
  "Monitoring and responding to customer engagement on social media channels.",
  "Collaborating with the design team to develop visually appealing marketing materials.",
  "Assisting in the analysis of campaign performance metrics.",
  "Supporting the organization of events, trade shows, and promotional activities.",
  "Managing and updating marketing databases and customer relationship management (CRM) systems.",
  "Collaborating with cross-functional teams to ensure consistent brand messaging.",
  "Conducting market research to identify trends and opportunities.",
  "Contributing innovative ideas for creative problem-solving within the marketing team.",
];

export const jobInfoTitles = [
  "Job Description",
  "Contact Information",
  "Application Deadline",
  "Qualifications",
  "Responsibilities",
  "Benefits",
  "Salary or Compensation",
];
