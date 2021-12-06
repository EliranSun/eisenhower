import { NOW, ONE_DAY, TOMORROW, YERSTERDAY } from "../constants";

export const getTime = {
  [TOMORROW]: (timestamp) => timestamp + ONE_DAY,
  [YERSTERDAY]: (timestamp) => timestamp - ONE_DAY,
  [NOW]: () => new Date().getTime(),
};

export const timestampsAreOnSameDay = (firstTimestamp, secondTimestamp) => {
  const first = new Date(firstTimestamp);
  const second = new Date(secondTimestamp);

  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}
