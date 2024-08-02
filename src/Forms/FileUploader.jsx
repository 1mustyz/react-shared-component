/* eslint-disable react/jsx-props-no-spreading */

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
import cn from "Utils/cn";
import { IMAGE_SIZE, filesAllowed } from "Utils/constants";
import readableFileSize from "Utils/readableFileSize";

const FileUploader = ({
  onFileUpload,
  title,
  isLoading = false,
  disabled = false,
  exceedSize = false,
  showFileNotAllowedError = false,
  size = IMAGE_SIZE,
}) => {
  const [selected, setSelected] = useState(null);
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      setSelected(acceptedFiles[0]);
      onFileUpload(acceptedFiles);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Specify the file types you want to accept
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        " border-dashed border-2 p-4 text-center h-[200px] sm:h-[150px] flex flex-col justify-center items-center",
        `${disabled && "cursor-default opacity-40"}`
      )}
    >
      {!isLoading ? (
        <div className="flex flex-col gap-3 sm:gap-2">
          {!disabled && <input {...getInputProps()} />}
          <div className="flex justify-center ">
            <FaCloudUploadAlt
              size={95}
              className="border-dashed border-2 rounded-full w-[fit-cotent] p-6"
            />
          </div>
          <p className="text-center sm:text-[12px]">
            {selected ? selected?.name : title}
          </p>
          <p className=" text-red-500">
            {exceedSize && (
              <span> File size exceeds limit of {readableFileSize(size)}</span>
            )}

            {showFileNotAllowedError && (
              <span>Files allowed are: {filesAllowed.join(", ")}</span>
            )}
          </p>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default FileUploader;
