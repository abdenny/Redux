let deleteProduct = (id) => {
  return {
    type: 'deleteProduct',
    id: id,
  };
};

export default deleteProduct;
