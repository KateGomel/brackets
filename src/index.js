module.exports = function check(str, bracketsConfig) {
  let pairsBrackets = {};
  bracketsConfig.map((item) => {
    pairsBrackets[item[1]] = item[0];
  });

  let closeBrackets = Object.keys(pairsBrackets);

  let openBrackets = Object.values(pairsBrackets);

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const temp = str[i];
    if (openBrackets.includes(temp)) {
      stack.push(temp);
      if (pairsBrackets[temp] === temp) {
        stack.pop();
      }
    } else if (closeBrackets.includes(temp)) {
      if (pairsBrackets[temp] === stack[stack.length - 1]) {
        stack.pop();
      } else if (!stack.length || pairsBrackets[temp] !== stack.pop()) {
        stack.push(temp);
      }
    }
  }

  if (stack.length) return false;
  else return true;
};
