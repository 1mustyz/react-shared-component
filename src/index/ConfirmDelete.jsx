import { useState } from "react";
import CustomModal from "Forms/CustomModal";
import { InputNoFormik } from "Forms/Input";
import Button from "Forms/Button";
import PropTypes from "prop-types";

const ConfirmDelete = ({
  openConfirmDelete,
  setOpenConfirmDelete,
  title,
  deleteName,
  isLoading,
  handleDelete,
}) => {
  const [text, settext] = useState("");

  return (
    <CustomModal
      open={openConfirmDelete}
      handleClose={() => !isLoading && setOpenConfirmDelete(false)}
      modalClassName="min-h-[100px] sm:h-[205px] sm:top-32 w-[35%]"
      title={`Delete ${title}`}
    >
      <div className="flex flex-col h-full mt-3 gap-3 w-full ">
        <p className="text-[14px]">
          To continue with this action please type the name of the section
          <span className="font-semibold"> "{deleteName}"</span>
        </p>
        <InputNoFormik
          className="text-primary font-semibold"
          handleChange={(e) => settext(e.target.value)}
          value={text}
        />

        <div className="flex justify-between">
          <Button
            handleSubmit={() => setOpenConfirmDelete(false)}
            title="Cancel"
            className="w-fit text-[12px] font-medium py-2 px-4"
            variant="outline"
          />
          <Button
            handleSubmit={handleDelete}
            isLoading={isLoading}
            title="Delete"
            className="w-fit text-[12px] font-medium py-2 px-4 bg-[#D10409]"
            disabled={text !== deleteName}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default ConfirmDelete;

ConfirmDelete.prototype = {
  openConfirmDelete: PropTypes.bool,
  setOpenConfirmDelete: PropTypes.func,
  title: PropTypes.string,
  deleteName: PropTypes.string,
  isLoading: PropTypes.bool,
  handleDelete: PropTypes.func,
};

ConfirmDelete.defaultProps = {
  title: "",
  deleteName: "",
  isLoading: false,
  handleDelete: () => {},
};
