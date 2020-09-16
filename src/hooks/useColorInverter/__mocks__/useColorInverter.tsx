export default jest.fn().mockReturnValue([
  jest.fn().mockReturnValue({
    r: 0,
    g: 1,
    b: 2,
  }),
]);
