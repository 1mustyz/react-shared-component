const trimText = (text, maxLen = 17, stop = 14) => {
  if (text?.length > maxLen) {
    return `${text.slice(0, stop)} ...`;
  }
  return text;
};

export default trimText;
