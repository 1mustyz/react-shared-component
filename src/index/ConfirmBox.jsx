import CustomModal from "../Forms/CustomModal";
import Button from "../Forms/Button";
import PropTypes from "prop-types";

const ConfirmBox = ({
  openConfirmBox,
  setOpenConfirmBox,
  title,
  isLoading,
  handleConfirm,
}) => {
  return (
    <CustomModal
      open={openConfirmBox}
      handleClose={() => !isLoading && setOpenConfirmBox(false)}
      modalClassName="min-h-[100px] sm:h-[205px] sm:top-32 w-[35%]"
      title={title}
    >
      <div className="flex flex-col h-full mt-3 gap-3 w-full ">
        <p className="text-[14px]">
          To continue with this action please click on the
          <span className="font-semibold"> "Continue button"</span>
        </p>

        <div className="border-t-1 w-full" />

        <div className="flex justify-between">
          <Button
            handleSubmit={() => setOpenConfirmBox(false)}
            title="Cancel"
            className="w-fit text-[12px] font-medium py-2 px-4"
            variant="outline"
          />
          <Button
            handleSubmit={handleConfirm}
            isLoading={isLoading}
            title="Continue"
            className="w-fit text-[12px] font-medium py-2 px-4"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default ConfirmBox;

ConfirmBox.prototype = {
  openConfirmBox: PropTypes.bool,
  setOpenConfirmBox: PropTypes.func,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  handleConfirm: PropTypes.func,
};

ConfirmBox.defaultProps = {
  title: "",
  isLoading: false,
  handleConfirm: () => {},
};
