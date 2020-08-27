const codeMap = {
  cv: "편의점",
  cf: "카페",
  rs: "음식점",
  hp: "병원",
  sm: "슈퍼마켓",
  pc: "피씨방",
}

const data2chartConfig = (data) => {
  return data.reduce((acc, {code, score, cnt}) => {
    acc.labels.push(codeMap[code])
    acc.scores.push(score);
    // acc.cnt.push(cnt);
    return acc;
  }, {
    labels: [],
    scores: [],
    // cnt: [],
  })
}


export { codeMap, data2chartConfig };