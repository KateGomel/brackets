module.exports = function check(str, bracketsConfig) {
  let pairsBrackets = {};
  let dblBrackets = {};

  bracketsConfig.forEach((item) => {
    pairsBrackets[item[1]] = item[0];
    if (item[0] === item[1]) {
      dblBrackets[item[0]] = true;
    }
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const temp = str[i];
    if (dblBrackets[temp]) {
      if (stack[stack.length - 1] === temp) {
        stack.pop();
      } else {
        stack.push(temp);
      }
    } else if (pairsBrackets[temp]) {
      if (stack[stack.length - 1] === pairsBrackets[temp]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(temp);
    }
  }

  if (stack.length) return false;
  else return true;
};
