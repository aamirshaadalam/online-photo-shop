import reducer, { setCurrentPage, setPageSize, getCurrentPage, getPageSize } from './page-slice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ page: 1, pageSize: 25 });
});

test('should update the page', () => {
  const previousState = { page: 1, pageSize: 25 };

  expect(reducer(previousState, setCurrentPage(5))).toEqual({ page: 5, pageSize: 25 });
});

test('should not update the page if the given value is invalid', () => {
  const previousState = { page: 1, pageSize: 25 };

  expect(reducer(previousState, setCurrentPage('invalid'))).toEqual({ page: 1, pageSize: 25 });
});

test('should update the pageSize', () => {
  const previousState = { page: 1, pageSize: 25 };

  expect(reducer(previousState, setPageSize(10))).toEqual({ page: 1, pageSize: 10 });
});

test('should not update the pageSize if the given value is invalid', () => {
  const previousState = { page: 1, pageSize: 25 };

  expect(reducer(previousState, setPageSize('invalid'))).toEqual({ page: 1, pageSize: 25 });
});

test('should return the page', () => {
  expect(getCurrentPage({ pagination: { page: 5, pageSize: 25 } })).toEqual(5);
});

test('should return the pageSize', () => {
  expect(getPageSize({ pagination: { page: 5, pageSize: 25 } })).toEqual(25);
});
