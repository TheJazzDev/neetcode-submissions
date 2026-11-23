class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sTracker = new Map<string, number>();

        if (s.length !== t.length) {
            return false;
        }

        for (const char of s) {
            const frequency = sTracker.get(char)

            if (sTracker.has(char)) {
                sTracker.set(char, (frequency ?? 0) + 1)
            } else {
                sTracker.set(char, 1)
            }
        }

        // If a character doesn't exist in the Map, return false.
        // Subtract 1 from its frequency.
        // If the frequency becomes negative, return false.
        // If the loop completes, return true.

        for (const char of t) {
            const frequency = sTracker.get(char)

            if (!sTracker.has(char)) {
                return false
            } else {
                sTracker.set(char, (frequency ?? 0) - 1)
            }

            if (sTracker.get(char) < 0) {
                return false
            } 
        }

        return true
    }
}


        