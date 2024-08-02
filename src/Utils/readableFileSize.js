import { IMAGE_SIZE } from "./constants";

/**
 * Generates a human-readable file size from the given attachment size.
 *
 * @param {number} attachmentSize - The size of the attachment in bytes
 * @return {string} The human-readable file size in kilobytes (kb) or megabytes (mb)
 */
const readableFileSize = (attachmentSize) => {
  const fileSize = attachmentSize ?? IMAGE_SIZE;

  if (!fileSize) {
    return `${IMAGE_SIZE} kb`;
  }

  const sizeInKb = fileSize / 1024;

  if (sizeInKb > 1024) {
    return `${(sizeInKb / 1024).toFixed(2)} mb`;
  }
  return `${sizeInKb.toFixed(2)} kb`;
};

export default readableFileSize;
