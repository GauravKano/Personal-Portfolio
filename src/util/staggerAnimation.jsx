export const calcDelay = (countRef, delayTime) => {
  const delay = countRef.current * delayTime;
  countRef.current += 1;
  return delay;
};

export const animationEnd = (countRef) => {
  countRef.current = Math.max(countRef.current - 1, 0);
};
