export const transformClassOption = (data) => {
  return (
    data?.map((item) => ({
      value: item?._id,
      label: item?.name,
      smallLabel: item?.category?.name?.toLowerCase() || "none",
    })) || []
  );
};

export const transformSelectOption = (data) => {
  return (
    data?.map((item) => ({
      value: item?._id,
      label: item?.name,
    })) || []
  );
};
