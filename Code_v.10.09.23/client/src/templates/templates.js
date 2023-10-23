import {
  home_icon,
  message_icon,
  community_icon,
  jobs_icon,
  saved_job_icon,
  resume_icon,
  contact_support_icon,
  settings_icon,
  grid,
  file_text,
  users,
  search_icon,
} from "./image_imports";

export const default_data = {
  contact_data: [
    { name: "fullname", placeholder: "Full name" },
    {
      name: "phone_number",
      placeholder: "Phone number",
    },
    {
      name: "email_address",
      placeholder: "Email address",
    },
    {
      name: "resume_objective",
      placeholder: "Resume objective",
    },
  ],

  education_data: [
    { name: "education_level", placeholder: "Education Level" },
    { name: "name_of_institution", placeholder: "Name of Institution" },
    { name: "year_graduated", placeholder: "Year Graduated" },
    { name: "achievements", placeholder: "Achievements" },
  ],

  language_data: [{ name: "languages", placeholder: "Language" }],

  hobbies_interest_data: [
    { name: "hobbies_interest", placeholder: "Hobbies and Interest" },
  ],

  skills_data: [
    { placeholder: "Skill", name: "skill" },
    { placeholder: "Proficiency", name: "proficiency" },
  ],

  achievements_data: [
    { placeholder: "Reward name", name: "reward_name" },
    { placeholder: "Year recieved", name: "year_received" },
    { placeholder: "Issuer/Organization", name: "issuer" },
    { placeholder: "Description (Optional)", name: "reward_description" },
  ],

  project_data: [
    { placeholder: "Project name", name: "project_name" },
    {
      placeholder: "Published Year/Year Developed",
      name: "published_year",
    },
    { placeholder: "Description (Optional)", name: "project_description" },
  ],

  reference_data: [
    { placeholder: "Full name", name: "reference_full_name" },
    { placeholder: "Relationship to you?", name: "relationship_to_you" },
    { placeholder: "Institution", name: "institution" },
    { placeholder: "Contact Information", name: "contact_information" },
  ],

  navigation_data: [
    { id: 1, name: "Home", icon: home_icon, path: "/" },
    { id: 2, name: "Messages", icon: message_icon, path: "/messages" },
    { id: 3, name: "Community", icon: community_icon, path: "/community" },
  ],

  job_related_data: [
    { id: 4, name: "Jobs", icon: jobs_icon, path: "/jobs" },
    // { id: 5, name: "Saved Jobs", icon: saved_job_icon, path: "/saved-jobs" },
    { id: 6, name: "Manage Documents", icon: resume_icon, path: "/documents" },
    { id: 7, name: "View Application", icon: resume_icon, path: "/status" },
  ],

  user_preference: [
    // {
    //   id: 8,
    //   name: "Contact Support",
    //   icon: contact_support_icon,
    //   path: "/contact-support",
    // },
    { id: 9, name: "Settings", icon: settings_icon, path: "/settings" },
  ],

  required_docs_application: [
    {
      id: 1,
      name: "Resume",
      action: "Click to create/update your resume now.",
      path: "resume",
    },
    {
      id: 2,
      name: "Official Transcript of Records",
      action: "Click to upload/update file",
      path: "tor",
    },
    {
      id: 3,
      name: "PSA Birth Certificate",
      action: "Click to upload/update file",
      path: "psa",
    },
    {
      id: 4,
      name: "NBI Clearance",
      action: "Click to upload/update file",
      path: "nbi",
    },
  ],

  navigation_recruiters: [
    { id: 1, name: "Home", icon: home_icon, path: "/" },
    { id: 2, name: "Messages", icon: message_icon, path: "/messages" },
    { id: 3, name: "Community", icon: community_icon, path: "/community" },
  ],

  job_related_recruiters: [
    { id: 4, name: "Job Posts", icon: search_icon, path: "/manage-jobs" },
    { id: 5, name: "Find Talents", icon: search_icon, path: "/applicants" },
  ],

  navigation_admin: [
    { id: 1, name: "Home", icon: grid, path: "/" },
    { id: 2, name: "Messages", icon: message_icon, path: "/messages" },
    { id: 3, name: "Community", icon: community_icon, path: "/community" },
    { id: 4, name: "Users", icon: users, path: "/users" },
    { id: 5, name: "Reports", icon: file_text, path: "/reports" },
  ],

  person_profile: [
    {
      label: "Full name",
      placeholder: "Arvin Malaluan",
      name: "name",
    },
    {
      label: "Bio",
      placeholder: "Can be a short description about you",
      name: "bio",
    },
    {
      label: "Social Links",
      placeholder: "Include links like github, linkedIn, facebook, etc.",
      name: "social_links",
    },
    {
      label: "Location",
      placeholder: "Where do you live?",
      name: "location",
    },
    {
      label: "Portfolio Link",
      placeholder: "Showcase your old projects.",
      name: "portfolio_link",
    },
    {
      label: "Educational Attainment",
      placeholder: "College Graduate, College Undergraduate, etc.",
      name: "educational_attainment",
    },
  ],

  company_profile: [
    {
      label: "Company Name",
      placeholder: "ABC Corporation",
      name: "name",
    },
    {
      label: "Bio",
      placeholder: "Passionate about creating innovative solutions.",
      name: "bio",
    },
    {
      label: "Location",
      placeholder: "New York, USA",
      name: "location",
    },
    {
      label: "Employee Count",
      placeholder: "500",
      name: "emp_count",
    },
    {
      label: "Subsidiaries Count",
      placeholder: "10",
      name: "subsidiaries_count",
    },
    {
      label: "Company Overview",
      placeholder:
        "We are a leading tech company specializing in AI solutions.",
      name: "comp_overview",
    },
    {
      label: "Website Link",
      placeholder: "https://www.abccorporation.com",
      name: "site_link",
    },
  ],

  job_post: [
    { label: "Job Title", placeholder: "Software Engineer", name: "job_title" },
    { label: "Employment Type", placeholder: "Full-Time", name: "emp_type" },
    {
      label: "Required Experience",
      placeholder: "2 years in software development",
      name: "req_expi",
    },
    {
      label: "Required Education",
      placeholder: "Bachelor's Degree in Computer Science",
      name: "req_educ",
    },
    {
      label: "Job Description",
      placeholder: "Develop and maintain web applications",
      name: "job_desc",
    },
    {
      label: "Contact Information",
      placeholder: "hr@company.com",
      name: "contact_info",
    },
    { label: "App Duedate", placeholder: "2023-12-31", name: "app_duedate" },
    {
      label: "Skills",
      placeholder: "e.g. Web Development, Programming",
      name: "skills",
    },
    {
      label: "Qualifications",
      placeholder: "Proficient in JavaScript and Python",
      name: "qualifications",
    },
    {
      label: "Responsibilities",
      placeholder: "Code, test, and debug new software",
      name: "responsibilities",
    },
    {
      label: "Benefits",
      placeholder: "Health insurance, retirement plan, paid time off",
      name: "benefits",
    },
    { label: "Salary", placeholder: "not mentioned", name: "salary" },
  ],
};
