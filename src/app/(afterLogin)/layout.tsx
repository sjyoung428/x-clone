import SearchIcon from "@/components/svgs/SearchIcon";
import XLogo from "@/components/svgs/XLogo";
import Link from "next/link";
import { tv } from "tailwind-variants";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  const layout = afterLoginLayoutVariants();

  return (
    <div className={layout.container()}>
      <header className={layout.leftSideHeader()}>
        <section className={layout.leftHeaderSection()}>
          <div className={layout.leftSectionFixed()}>
            <Link className={layout.logo()} href="/home">
              <div className={layout.logoPill()}>
                <XLogo fill="white" width={40} />
              </div>
            </Link>
          </div>
        </section>
      </header>
      <div className={layout.rightSideContainer()}>
        <div className={layout.rightInner()}>
          <main className={layout.main()}>{children}</main>
          <section className={layout.rightSection()}>
            <form className={layout.searchForm()} action="">
              <SearchIcon className={layout.searchIcon()} />
              <input
                className={layout.searchInput()}
                type="search"
                placeholder="검색"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AfterLoginLayout;

const afterLoginLayoutVariants = tv({
  slots: {
    container: "flex items-stretch bg-black h-[200dvh]",
    leftSideHeader: "flex flex-col items-end grow shrink-0",
    leftHeaderSection: "w-[275px] h-[100dvh]",
    leftSectionFixed: "fixed w-[inherit] h-[100dvh]",
    logo: "inline-block h-[56px] mt-[2px]",
    logoPill:
      "flex justify-center items-center w-[50px] h-[50px] rounded-full hover:bg-[#181919] transition p-2",
    rightSideContainer: "flex items-start grow shrink h-[100dvh] flex-col",
    rightInner: "h-full w-[990px] flex justify-between",
    main: "w-[600px] ",
    rightSection: "w-[350px] h-full",
    searchForm:
      "fixed h-[42px] w-[inherit] rounded-lg bg-[#202327] mt-[6px] mb-[12px] flex items-center",
    searchIcon: "ml-[20px] fill-[#71767A]",
    searchInput:
      "outline-none bg-inherit border-none p-2 mr-[5px] text-base text-white ",
  },
});
