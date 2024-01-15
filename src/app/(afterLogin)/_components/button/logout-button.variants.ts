import { tv } from "tailwind-variants";

const logoutButtonVariants = tv({
  slots: {
    button:
      "w-[258px] h-[66px] p-3 flex gap-4 mx-3 cursor-pointer border-none items-center bg-black text-left hover:bg-[#181818] rounded-full",
    userImageContainer: "flex items-center",
    userImage: "w-10 rounded-full",
    usernameContainer: "mt-3",
    username: "font-bold",
  },
});

export const logoutButton = logoutButtonVariants();
