module.exports = {
  tabWidth: 2,
  parser: 'typescript',
  printWidth: 120,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true, // JSX에서 singleQuote or doubleQuote
  endOfLine: 'lf',
  trailingComma: 'all', // comma 항상 붙이기
  bracketSpacing: true, // 객체리터럴에서 { } 사이에 공백을 넣을 것인지
  jsxBracketSameLine: false, // 여러줄의 JSX 요소가 있을때, > 를 마지막 줄의 끝부분에서 닫을 것인지
  arrowParens: 'avoid', // (x) => x : always | x => x : avoid
}
