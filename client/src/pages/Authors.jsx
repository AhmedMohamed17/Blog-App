import React from "react";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import Avatar5 from "../images/avatar5.jpg";

const authorData = [
  { id: 1, avatar: Avatar1, name: "ahmed tawfeek", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Ahmed mohamed", posts: 5 },
  { id: 3, avatar: Avatar3, name: "mahmoud anwar", posts: 0 },
  { id: 4, avatar: Avatar4, name: "khaled mohsen", posts: 2 },
  { id: 5, avatar: Avatar5, name: "anwar wagdy", posts: 1 },
];

const Authors = () => {
  return <section className="authors"></section>;
};

export default Authors;
