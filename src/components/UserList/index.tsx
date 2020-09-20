import React, { useState, useEffect } from "react";

import Avatar from "../Avatar";
import UserData from "../UserData";
import Search from "../Search";

import * as S from "./styles";

interface UserProps {
  src: string;
  author: string;
  date: string;
  message?: string | React.ReactElement | React.ReactNode;
}

const UserRow: React.FC<UserProps> = ({ src, author, date, message }) => {
  return (
    <S.User>
      <Avatar src={src} alt={author} size={50} />

      <S.Details>
        <S.Info>
          <strong>{author}</strong>
          <time>{date}</time>
        </S.Info>
        <S.Message>{message}</S.Message>
      </S.Details>
    </S.User>
  );
};

const UserList: React.FC = () => {
  const [chatList, setChatList] = useState([
    {
      author: "Ket <3",
      date: "2020/09/13",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message:
        "​Eu também gostaria de saber quanto tempo ficar no ar depois de terminar?",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message:
        "​Eu também gostaria de saber quanto tempo ficar no ar depois de terminar?",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message:
        "​Eu também gostaria de saber quanto tempo ficar no ar depois de terminar?",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message:
        "​Eu também gostaria de saber quanto tempo ficar no ar depois de terminar?",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message:
        "​Eu também gostaria de saber quanto tempo ficar no ar depois de terminar?",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
    {
      author: "Ket <3",
      date: "2020/09/13",
      message: "Olá :3",
      src:
        "https://instagram.fcwb2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118297798_994178951042921_3853566603649489659_n.jpg?_nc_ht=instagram.fcwb2-1.fna.fbcdn.net&_nc_ohc=vQAAEaYYKlkAX8kht18&oh=9a33d04e6aa4d98f0e347cf3b31c0554&oe=5F87518C",
    },
  ]);

  return (
    <S.Container>
      <UserData />

      <Search />

      <S.ChatList>
        {chatList.map(({ author, src, date, message }, index) => (
          <UserRow
            key={index}
            author={author}
            src={src}
            date={date}
            message={message}
          />
        ))}
      </S.ChatList>
    </S.Container>
  );
};

export default UserList;
