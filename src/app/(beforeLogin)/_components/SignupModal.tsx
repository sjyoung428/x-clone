"use client";

import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { modal } from "./common/modal.variants";

export default function SignupModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();
  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (event) => {
    setId(event.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNickname(event.target.value);
  };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.target.files && setImageFile(event.target.files[0]);
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:9090/api/users", {
      method: "post",
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: "include",
    })
      .then((response: Response) => {
        console.log(response.status);
        if (response.status === 200) {
          router.replace("/home");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className={modal.background()}>
        <div className={modal.container()}>
          <div className={modal.header()}>
            <button className={modal.closeButton()} onClick={onClickClose}>
              <svg
                width={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              >
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </button>
            <div>계정을 생성하세요.</div>
          </div>
          <form className={modal.form()}>
            <div className={modal.body()}>
              <div className={modal.inputContainer()}>
                <label className={modal.label()} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  className={modal.input()}
                  type="text"
                  placeholder=""
                  value={id}
                  onChange={onChangeId}
                />
              </div>
              <div className={modal.inputContainer()}>
                <label className={modal.label()} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  className={modal.input()}
                  type="text"
                  placeholder=""
                  value={nickname}
                  onChange={onChangeNickname}
                />
              </div>
              <div className={modal.inputContainer()}>
                <label className={modal.label()} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  className={modal.input()}
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div className={modal.inputContainer()}>
                <label className={modal.label()} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={onChangeImageFile}
                />
              </div>
            </div>
            <div className={modal.footer()}>
              <button className={modal.activeButton()} disabled>
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
