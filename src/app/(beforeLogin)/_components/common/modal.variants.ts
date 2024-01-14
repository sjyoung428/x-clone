import { tv } from "tailwind-variants";

const modalVariants = tv({
  slots: {
    background:
      "w-[100vw] h-full flex justify-center absolute top-0 left-0 bg-black bg-opacity-50",
    container:
      "text-black bg-white relative top-[5%] max-w-[80vw] min-w-[600px] rounded-md flex flex-col h-[600px] p-12",
    header: "font-bold text-2xl p-4 bg-primary",
    form: "flex flex-col flex-1",
    body: "flex-1 p-4",
    inputContainer: "flex flex-col relative h-[80px] mx-4",
    label: "cursor-pointer",
    input: "w-full h-full border-2 border-gray-300 rounded-md p-2",
    footer: "px-6 py-10 mb-6",
    activeButton:
      "cursor-pointer w-full h-12 rounded-md bg-black text-white text-base disabled:opacity-50 acitve:hover:bg-opacity-80",
    closeButton:
      "w-9 h-9 rounded-full border-none cursor-pointer bg-white absolute left-4 top-4 flex justify-center items-center hover:bg-gray-200",
  },
});

export const modal = modalVariants();
