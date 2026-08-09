function compareTime(timestring1, timestring2) {
  const time1 = new Date(timestring1);
  const time2 = new Date(timestring2);
  return time1.getTime() > time2.getTime();
}   

export { compareTime };