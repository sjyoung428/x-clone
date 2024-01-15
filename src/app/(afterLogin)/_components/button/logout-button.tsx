"use client";

import { logoutButton } from "./logout-button.variants";

const LogoutButton = () => {
  const me = {
    id: "123",
    nickname: "asdf",
    image: "/dino.png",
  };

  return (
    <button className={logoutButton.button()}>
      <div className={logoutButton.userImageContainer()}>
        <img className={logoutButton.userImage()} src={me.image} alt={me.id} />
      </div>
      <div className={logoutButton.usernameContainer()}>
        <div className={logoutButton.username()}>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
