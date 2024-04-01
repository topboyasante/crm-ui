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
          icon: <Home className="w-4 h-4" />,
        },
        {
          id: "d2",
          name: "Applicants",
          link: "/admin/applicants",
          icon: <Hourglass className="w-4 h-4" />,
        },
        {
          id: "d3",
          name: "Feed",
          link: "/feed",
          icon: <MessageCircle className="w-4 h-4" />,
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
          icon: <Users className="w-4 h-4" />,
        },
        // {
        //   id: "c2",
        //   name: "Leaderboard",
        //   link: "/leaderboard",
        //   icon: <BsBarChart className="w-4 h-4" />,
        // },
        {
          id: "c3",
          name: "Announcements",
          link: "/announcements",
          icon: <Bell className="w-4 h-4" />,
        },
        {
          id: "c4",
          name: "Community Projects",
          link: "/community-projects",
          icon: <Target className="w-4 h-4" />,
        },
        // {
        //   id: "c5",
        //   name: "Marketplace",
        //   link: "/marketplace",
        //   icon: <BsCart2 className="w-4 h-4" />,
        // },
        // {
        //   id: "c6",
        //   name: "Points System",
        //   link: "/points-system",
        //   icon: <LuPuzzle className="w-4 h-4" />,
        // },
      ],
    },
  ];