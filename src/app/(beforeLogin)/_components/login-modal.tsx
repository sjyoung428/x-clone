"use client";

import { useState } from "react";
import { modal } from "./common/modal.variants";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className={modal.background()}>
      <div className={modal.container()}>
        <div className={modal.header()}>
          <button className={modal.closeButton()} onClick={onClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form className={modal.form()} onSubmit={onSubmit}>
          <div className={modal.body()}>
            <div className={modal.inputContainer()}>
              <label className={modal.label()} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={modal.input()}
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className={modal.inputContainer()}>
              <label className={modal.label()} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={modal.input()}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div>{message}</div>
          <div className={modal.footer()}>
            <button
              className={modal.activeButton()}
              disabled={!id && !password}
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
