export const format_count = (count) => {
  if (count >= 10000) {
    return (count / 1000).toFixed(1) + "k";
  } else {
    return count.toString();
  }
};
