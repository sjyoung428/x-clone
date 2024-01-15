import { tv } from "tailwind-variants";

const navigationVariants = tv({
  slots: {
    menuPill: "flex gap-2 hover:bg-[#181818] transition px-4 py-2 rounded-full",
    fontBold: "font-bold",
  },
});

export const navigation = navigationVariants();
