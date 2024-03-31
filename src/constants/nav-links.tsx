import {
    Bell,
    Home,
    Hourglass,
    MessageCircle,
    Target,
    Users
} from "lucide-react";
export const NAV_LINKS = [
    {
      title: "DASHBOARD",
      links: [
        {
          id: "d1",
          name: "Overview",
          link: "/",
          icon: <Home size={20} />,
        },
        {
          id: "d2",
          name: "Applicants",
          link: "/admin/applicants",
          icon: <Hourglass size={20} />,
        },
        {
          id: "d3",
          name: "Feed",
          link: "/feed",
          icon: <MessageCircle size={20} />,
        },
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        {
          id: "c1",
          name: "Techies",
          link: "/techies",
          icon: <Users size={20} />,
        },
        // {
        //   id: "c2",
        //   name: "Leaderboard",
        //   link: "/leaderboard",
        //   icon: <BsBarChart size={20} />,
        // },
        {
          id: "c3",
          name: "Announcements",
          link: "/announcements",
          icon: <Bell size={20} />,
        },
        {
          id: "c4",
          name: "Community Projects",
          link: "/community-projects",
          icon: <Target size={20} />,
        },
        // {
        //   id: "c5",
        //   name: "Marketplace",
        //   link: "/marketplace",
        //   icon: <BsCart2 size={20} />,
        // },
        // {
        //   id: "c6",
        //   name: "Points System",
        //   link: "/points-system",
        //   icon: <LuPuzzle size={20} />,
        // },
      ],
    },
  ];