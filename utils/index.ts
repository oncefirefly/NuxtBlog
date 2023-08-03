export const formatDate = (date: Date | null | undefined) => {
  if (!date) return;

  const thisDate = new Date(date);

  return `${thisDate.getFullYear()}.${
    thisDate.getMonth() < 10 ? `0${thisDate.getMonth()}` : thisDate.getMonth()
  }.${thisDate.getDay() < 10 ? `0${thisDate.getDay()}` : thisDate.getDay()}  ${
    thisDate.getHours() < 10 ? `0${thisDate.getHours()}` : thisDate.getHours()
  }:${
    thisDate.getMinutes() < 10
      ? `0${thisDate.getMinutes()}`
      : thisDate.getMinutes()
  }`;
};
