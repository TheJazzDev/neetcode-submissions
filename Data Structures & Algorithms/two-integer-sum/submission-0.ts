class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (const [i, currentNumber] of nums.entries()) {
            const complement = target - currentNumber;
            const complementIndex = seen.get(complement);

            if (complementIndex !== undefined) {
            return [complementIndex, i];
            }

            seen.set(currentNumber, i);
        }

        return null;
    }
}
