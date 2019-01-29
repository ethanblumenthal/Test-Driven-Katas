const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split, offest;

  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offest = 1;
  } else {
    split = maxLen;
    offest = 0;
  }
  
  return line.substring(0, split) + '\n' + wrap(line.substring(split + offest), maxLen);
};

module.exports = wrap;