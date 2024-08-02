import * as Dialog from "@radix-ui/react-dialog";

import { BsX } from "react-icons/bs";
import cn from "Utils/cn";

const CustomModal = ({
  children,
  open = false,
  handleClose,
  title = "",
  className,
}) => {
  return (
    <div className="w-full">
      <Dialog.Root open={open} onOpenChange={handleClose}>
        <Dialog.Portal>
          <Dialog.Overlay className=" bg-black bg-opacity-[0.6] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content
            forceMount
            className={cn(
              "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
              className
            )}
          >
            <div className="flex justify-between items-center ">
              <h3 className="text-[20px] font-semibold">{title}</h3>
              <Dialog.Close asChild>
                <div className="cursor-pointer rounded-full p-2  bg-slate-50 flex justify-center items-center">
                  <BsX size={20} />
                </div>
              </Dialog.Close>
            </div>

            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default CustomModal;
