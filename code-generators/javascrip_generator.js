const generateJavascriptCode = (problemName, code, problemDescription) => {
    let resultCode;
    
    switch (problemName) {
        case 'twoSum':
            resultCode = `
                ${code}
                let nums = ${JSON.stringify(problemDescription.nums)};
                let target = ${problemDescription.target};
                var result = ${problemName}(nums,target);
                console.log(result)
            `;
            break;
        case 'reverseString':
            resultCode = `
                ${code}
                let nums = ${JSON.stringify(problemDescription.nums)}
                var result = ${problemName}(nums);
                console.log(result)
            `;
            break;
        case 'missingNumber':
            resultCode = `
                ${code}
                let nums = ${JSON.stringify(problemDescription.nums)};
                var result = ${problemName}(nums);
                console.log(result)
            `;
            break;
        case 'nextGreaterElement':
            resultCode = `
                ${code}
                let nums1 = ${JSON.stringify(problemDescription.nums1)};
                let nums2 = ${JSON.stringify(problemDescription.nums2)};
                var result = ${problemName}(nums1, nums2);
                console.log(result)
            `;
            break;
        case 'hasCycle':
            resultCode = `
                class ListNode {
                    constructor(val) {
                        this.val = val;
                        this.next = null;
                    }
                }

                function createLinkedList(nums, position) {
                    if (!nums || nums.length === 0 || position < 0 || position >= nums.length) {
                        return null;
                    }
                    let dummy = new ListNode(0);
                    let current = dummy;
                    for (let i = position; i < nums.length; i++) {
                        current.next = new ListNode(nums[i]);
                        current = current.next;
                    }
                    return dummy.next;
                }

                ${code}

                let nums = ${JSON.stringify(problemDescription.head)};
                let pos = ${problemDescription.pos};
                let head = createLinkedList(nums, pos);
                if (head !== null && pos >= 0 && pos < nums.length) {
                    let cycleStart = head;
                    while (cycleStart.next !== null) {
                        cycleStart = cycleStart.next;
                    }
                    let cycleNode = head;
                    for (let i = 0; i < pos; i++) {
                        cycleNode = cycleNode.next;
                    }
                    cycleStart.next = cycleNode;
                }
                var result = ${problemName}(head);
                console.log(result)
            `;
            break;
        default:
            resultCode = 'Problem not found';
            break;
    }

    return resultCode;
}

module.exports = { generateJavascriptCode }
