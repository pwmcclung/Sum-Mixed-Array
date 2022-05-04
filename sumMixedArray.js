function sumMix(x){
 const initialValue = 0;
const sumWithInitial = x.reduce(
  (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
  initialValue
);
  return sumWithInitial
}
