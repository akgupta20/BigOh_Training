const countWays = (arr, targetSum, dp, absoluteSum, idx, sum) => {
  if (idx >= arr.length) {
    if (sum == targetSum) return 1;
    return 0;
  }

  if (dp[idx][sum + absoluteSum] != -1) return dp[idx][sum + absoluteSum];

  // take current element
  const addCurrentElement = countWays(
    arr,
    targetSum,
    dp,
    absoluteSum,
    idx + 1,
    sum + arr[idx]
  );
  const subCurrentElement = countWays(
    arr,
    targetSum,
    dp,
    absoluteSum,
    idx + 1,
    sum - arr[idx]
  );

  const take = addCurrentElement + subCurrentElement;

  // not take current element
  const noTake = countWays(arr, targetSum, dp, absoluteSum, idx + 1, sum);

  return (dp[idx][sum + absoluteSum] = take + noTake);
};


const main = () => {
  // Sample Input
  const arr = [-1, 1, 2];
  const targetSum = 1;

  const n = arr.length;
  let absoluteSum = 0;

  for (let i = 0; i < n; i++) {
    absoluteSum += Math.abs(arr[i]);
  }

  const range = absoluteSum * 2 + 1;

  // DP intitalization
  const dp = Array.from({ length: n + 1 }, () => Array(range).fill(-1));
  //   console.log(dp);

  // Calculate the number of ways
  const result = countWays(arr, targetSum, dp, absoluteSum, 0, 0);

  // Print the result
  console.log(result);

};

main();
