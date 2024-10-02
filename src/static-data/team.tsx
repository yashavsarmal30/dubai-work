import { Team } from "@/types/team";
import { v4 as uuid } from "uuid";

export const teamData: Team[] = [
  {
    id: uuid(),
    name: "Olivia Andrium",
    designation: "Project Manager",
    image: "/images/team/image-1.jpg",
    socialLinks: [
      {
        id: uuid(),
        name: "Facebook",
        link: "/",
      },
      {
        id: uuid(),
        name: "Twitter",
        link: "/",
      },
      {
        id: uuid(),
        name: "Linkedin",
        link: "/",
      },
    ],
  },
  {
    id: uuid(),
    name: "Jemse Kemorun",
    designation: "Frontend Developer",
    image: "/images/team/image-2.jpg",
    socialLinks: [
      {
        id: uuid(),
        name: "Facebook",
        link: "/",
      },
      {
        id: uuid(),
        name: "Twitter",
        link: "/",
      },
      {
        id: uuid(),
        name: "Linkedin",
        link: "/",
      },
    ],
  },
  {
    id: uuid(),
    name: "Avi Pestarica",
    designation: "Product Designer",
    image: "/images/team/image-3.jpg",
    socialLinks: [
      {
        id: uuid(),
        name: "Facebook",
        link: "/",
      },
      {
        id: uuid(),
        name: "Twitter",
        link: "/",
      },
      {
        id: uuid(),
        name: "Linkedin",
        link: "/",
      },
    ],
  },
];
