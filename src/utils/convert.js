export const convertNumberToKorean = (number) => {
  if (isNaN(number) || number === 0) return '';

  const digits = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const units = ['', '십', '백', '천'];
  const bigUnits = ['', '만', '억 ', '조 ', '경 '];

  const numString = number.toString();
  let result = '';
  let unitIndex = 0;
  let bigUnitIndex = 0;
  let chunkResult = ''; // 작은 단위(천 이하)의 결과를 저장

  for (let i = numString.length - 1; i >= 0; i--) {
    const digit = parseInt(numString[i], 10);

    if (digit !== 0) {
      chunkResult = digits[digit] + units[unitIndex] + chunkResult;
    }

    unitIndex++;

    if (unitIndex > 3 || i === 0) {
      if (chunkResult) {
        result = chunkResult + bigUnits[bigUnitIndex] + result;
      }
      chunkResult = '';
      unitIndex = 0;
      bigUnitIndex++;
    }
  }

  return result;
};
