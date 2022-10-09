const convertDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const dynamicTimestamp = (timeStamp) => {
  const dateStringBuilder = (num, string) => {
    if (num !== 1) {
      return num + " " + string + "s ago";
    }
    return num + " " + string + " ago";
  };

  const secondsElapsed = Math.floor((Date.now() - timeStamp) / 1000);

  if (secondsElapsed === 0) {
    return "just now";
  }
  if (secondsElapsed < 60) {
    return dateStringBuilder(secondsElapsed, "second");
  }
  const inMinutes = Math.floor(secondsElapsed / 60);
  if (inMinutes < 60) {
    return dateStringBuilder(inMinutes, "minute");
  }
  const inHours = Math.floor(inMinutes / 60);
  if (inHours < 24) {
    return dateStringBuilder(inHours, "hour");
  }
  const inDays = Math.floor(inHours / 24);
  if (inDays < 7) {
    return dateStringBuilder(inDays, "day");
  }
  const inWeeks = Math.floor(inDays / 7);
  if (inWeeks <= 10) {
    return dateStringBuilder(inWeeks, "week");
  }
  const inMonths = Math.floor(inDays / 30.42); // Mean number of days in a month.
  if (inMonths < 12) {
    return dateStringBuilder(inMonths, "month");
  }
  const inYears = Math.floor(inWeeks / 52);
  return dateStringBuilder(inYears, "year");
};

export { convertDate, dynamicTimestamp };
