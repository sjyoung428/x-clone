"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import HomeIcon from "@/components/svgs/home-icon";
import SearchIcon from "@/components/svgs/search-icon";
import MessageIcon from "@/components/svgs/message-icon";
import ProfileIcon from "@/components/svgs/profile-icon";
import { navigation } from "./navigation.variants";

const NavigationMenu = () => {
  const segment = useSelectedLayoutSegment();
  const me = {
    id: "me",
  };

  return (
    <>
      <li>
        <Link href="/home">
          <div className={navigation.menuPill()}>
            {segment === "home" ? (
              <>
                <HomeIcon fill="white" width={26} type="solid" />
                <div className={navigation.fontBold()}>홈</div>
              </>
            ) : (
              <>
                <HomeIcon fill="white" width={26} type="outline" />
                <div>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div className={navigation.menuPill()}>
            {segment && ["search", "explore"].includes(segment) ? (
              <>
                <SearchIcon fill="white" width={26} type="bold" />
                <div className={navigation.fontBold()}>탐색하기</div>
              </>
            ) : (
              <>
                <SearchIcon fill="white" width={26} type="normal" />
                <div>탐색하기</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div className={navigation.menuPill()}>
            {segment === "messages" ? (
              <>
                <MessageIcon width={26} fill="white" type="solid" />
                <div className={navigation.fontBold()}>쪽지</div>
              </>
            ) : (
              <>
                <MessageIcon width={26} fill="white" type="outline" />
                <div>쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link href={`/${me?.id}`}>
            <div className={navigation.menuPill()}>
              {segment === me.id ? (
                <>
                  <ProfileIcon width={26} fill="white" type="solid" />
                  <div className={navigation.fontBold()}>프로필</div>
                </>
              ) : (
                <>
                  <ProfileIcon width={26} fill="white" type="outline" />
                  <div>프로필</div>
                </>
              )}
            </div>
          </Link>
        </li>
      )}
    </>
  );
};

export default NavigationMenu;
