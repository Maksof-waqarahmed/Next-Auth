import { BookOpenCheck, NotebookPen, ScrollText } from "lucide-react";

export const dashboardConfig = {
  user: [
    {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
  ],
  navMain: [
    {
      title: "Write Blog",
      url: "/dashboard/write-blog",
      icon: NotebookPen,
      isActive: true,
    },
    {
      title: "Read Blog",
      url: "/dashboard/read-blog",
      icon: BookOpenCheck,
    },
    {
      title: "List",
      url: "/dashboard/list",
      icon: ScrollText,
    },
  ],
};
