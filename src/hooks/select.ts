export const selectCategories = (data = []) => {
  return data.map((item) => ({
    key: item?._id, // or key if FXSelect needs key
    label: item?.name,
  }));
};
