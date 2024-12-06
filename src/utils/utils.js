export const getProfitClaaName = (number) => {
  if (number > 0) {
    return 'text-danger';
  }

  if (number < 0) {
    return 'text-primary';
  }

  return '';
};

export const getSignOfNumber = (number) => {
  if (number > 0) {
    return '+';
  }

  if (number < 0) {
    return '-';
  }

  return '';
};
