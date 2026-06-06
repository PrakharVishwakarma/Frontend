// src/mock/landingData.js

import {
  FaUsers,
  FaTrophy,
  FaCode,
  FaUserTie,
  FaGavel,
  FaLightbulb,
} from "react-icons/fa";

export const platformFeatures = [
  {
    id: 1,
    title: "Hackathon Management",
    description:
      "Create, manage, and monitor hackathons seamlessly with powerful organizer tools.",
    icon: FaTrophy,
  },
  {
    id: 2,
    title: "Team Collaboration",
    description:
      "Participants can create teams, invite members, and collaborate efficiently.",
    icon: FaUsers,
  },
  {
    id: 3,
    title: "Project Submission",
    description:
      "Secure and streamlined submission portal with repository and demo links.",
    icon: FaCode,
  },
];

export const userRoles = [
  {
    id: 1,
    title: "Organizers",
    description:
      "Launch and manage hackathons with registrations, announcements, and judging.",
    icon: FaUserTie,
  },
  {
    id: 2,
    title: "Judges",
    description:
      "Review submissions with structured rubrics and evaluation dashboards.",
    icon: FaGavel,
  },
  {
    id: 3,
    title: "Mentors",
    description:
      "Help teams solve technical challenges using real-time support systems.",
    icon: FaLightbulb,
  },
];

export const featuredHackathons = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    participants: 1200,
    prize: "$50,000",
    mode: "Online",
    status: "Registration Open",
  },
  {
    id: 2,
    title: "Web3 Buildathon",
    participants: 900,
    prize: "$30,000",
    mode: "Hybrid",
    status: "Live",
  },
  {
    id: 3,
    title: "Smart India Hackathon",
    participants: 3500,
    prize: "$75,000",
    mode: "Offline",
    status: "Upcoming",
  },
];
