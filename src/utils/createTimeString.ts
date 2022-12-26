const createTimeString = (timestamp: number): string => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const setAndAppendZero = (appendTo: any) =>
    appendTo < 10 ? (appendTo = `0${appendTo}`) : appendTo;

  month = setAndAppendZero(month);
  day = setAndAppendZero(day);
  hours = setAndAppendZero(hours);
  minutes = setAndAppendZero(minutes);

  const timeString = `${day}/${month}/${year} ${hours}:${minutes}`;

  return timeString;
};

export { createTimeString };
