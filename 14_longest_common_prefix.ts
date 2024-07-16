// 14.Longest Common Prefix

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  let splitWord: string[] = [];
  splitWord = strs[0].split('');
  let targetStr: string = '';

  for (let i = splitWord.length; i > 0; i--) {
    targetStr = splitWord.slice(0, i).join('');
    let isCommonPrefix = strs.every(str => str.startsWith(targetStr));

    if (isCommonPrefix) {
      return targetStr;
    }
  }
  return '';
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // => "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // => ""
console.log(longestCommonPrefix(["aaa","aa","aaa"])); // => "aa"
