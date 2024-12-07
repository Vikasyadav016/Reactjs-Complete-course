const RemoveDuplicate = () => {
  const arr = [1, 2, [3, 4, [5, [6, 7], 8, 9], 20, 10], 11, 12];
  const arr1 = [[[[1, 2, 3, 4, 5]]]];

  const fuctionToAcheiveAccordingly = (arr) => {
    if (!Array.isArray(arr)) {
      return [arr];
    }

    // Otherwise, recursively flatten the array
    return arr.reduce((acc, item) => {
      return acc.concat(fuctionToAcheiveAccordingly(item)); // Concatenate the flattened item
    }, []);
  };
  const bbv = fuctionToAcheiveAccordingly(arr1);
  console.log(
    "bbbbb",
    bbv.sort((b, a) => b - a)
  );
  return (
    <div>
      <h3>Example Input : - [1,2,[3,4,[5,[6,7],8,9,],20,10],11,12]</h3>
      <h3>Output should be: - {bbv.sort((b, a) => b - a)?.join(',')}</h3>
    </div>
  );
};
export default RemoveDuplicate;
