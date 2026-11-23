class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const tracker = new Set<number>();

        for (const num of nums) {
            if (tracker.has(num)) {
                return true
            }

            tracker.add(num)
        }

        return false
    }
}
