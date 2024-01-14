import XLogo from "@/components/svgs/XLogo";
import Link from "next/link";
import { tv } from "tailwind-variants";

export default function LandingPage() {
  return (
    <div className={container()}>
      <div className={logo()}>
        <XLogo fill="white" />
      </div>
      <div className={section()}>
        <h1 className={text({ type: "title" })}>지금 일어나고 있는 일</h1>
        <h2 className={text({ type: "subtitle" })}>지금 가입하세요.</h2>
        <Link className={button()} href="/i/flow/signup">
          계정 만들기
        </Link>
        <h3 className={text()}>이미 트위터에 가입하셨나요?</h3>
        <Link className={button({ color: "inherit" })} href="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}

const container = tv({
  base: "flex w-[100dvw] h-[100dvh] justify-around items-center",
});

const logo = tv({
  base: "w-[380px] h-[380px] p-10",
});

const section = tv({
  base: "flex flex-col gap-4",
});

const text = tv({
  base: "text-lg font-normal",
  variants: {
    type: {
      title: "text-5xl font-bold",
      subtitle: "text-3xl font-bold",
    },
  },
});

const button = tv({
  base: "flex justify-center items-center max-w-[60%] bg-blue-500 hover:bg-blue-500/90 transition text-white rounded-full py-2 ",
  variants: {
    color: {
      blue: "bg-blue-500",
      white: "bg-white",
      inherit:
        "bg-[inherit] border-[0.5px] border-blue-50 hover:bg-blue-950 transition",
    },
  },
});
