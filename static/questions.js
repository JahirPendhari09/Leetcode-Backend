const dummyData = [
    {
        'id':1,
        'name' :'Two Sum',
        'dificulty':'Easy',
        'type': 'array',
        'description':`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
            You can return the answer in any order.`,
        'examples' :[
            {
                'id': 1,
                'input': {
                    'nums': [2, 7, 11, 15],
                    'target': 9
                },
                'output': [0, 1],
                'explanation': 'Because nums[0] + nums[1] == 9, we return [0, 1].'
            },
            {
                'id': 2,
                'input': {
                    'nums': [3, 2, 4],
                    'target': 6
                },
                'output': [1, 2],
                'explanation': 'Because nums[1] + nums[2] == 6, we return [1, 2].'
            },
            {
                'id': 3,
                'input': {
                    'nums': [3, 3],
                    'target': 6
                },
                'output': [0, 1],
                'explanation': 'Because nums[0] + nums[1] == 6, we return [0, 1].'
            },
            {
                'id': 4,
                'input': {
                    'nums': [1, 2, 3, 4, 5],
                    'target': 5
                },
                'output': [1, 2],
                'explanation': 'Because nums[0] + nums[3] == 5, we return [0, 3].'
            },
            {
                'id': 5,
                'input': {
                    'nums': [4, 6, 10, 15, 16],
                    'target': 21
                },
                'output': [1, 3],
                'explanation': 'Because nums[1] + nums[3] == 21, we return [1, 3].'
            },
            {
                'id': 6,
                'input': {
                    'nums': [1, 3, 4, 2],
                    'target': 6
                },
                'output': [2, 3],
                'explanation': 'Because nums[2] + nums[3] == 6, we return [2, 3].'
            },
            {
                'id': 7,
                'input': {
                    'nums': [5, 5, 5, 5],
                    'target': 10
                },
                'output': [0, 1],
                'explanation': 'Because nums[0] + nums[1] == 10, we return [0, 1].'
            },
            {
                'id': 8,
                'input': {
                    'nums': [2, 7, 8, 3],
                    'target': 10
                },
                'output': [0, 2],
                'explanation': 'Because nums[0] + nums[3] == 10, we return [0, 3].'
            },
            {
                'id': 9,
                'input': {
                    'nums': [1, 1, 1, 1],
                    'target': 2
                },
                'output': [0, 1],
                'explanation': 'Because nums[0] + nums[1] == 2, we return [0, 1].'
            },
            {
                'id': 10,
                'input': {
                    'nums': [10, 20, 30, 40, 50],
                    'target': 90
                },
                'output': [3, 4],
                'explanation': 'Because nums[3] + nums[4] == 90, we return [3, 4].'
            }
        ],
        'constraints':[
            '2 <= nums.length <= 104',
            '-109 <= nums[i] <= 109',
            '-109 <= target <= 109',
            'Only one valid answer exists.'
        ],
        'boilerPlates' :[
            {
                "language": "javascript",
                "boilerplate": "function twoSum(nums, target) {\n  // Write your code here and return your result\n} "
            },
            {
                "language": "java",
                "boilerplate": "public List<Number> twoSum(int[] nums, int target) {\n  // Write your code here and return your result \n return null; \n}"
            },
            {
                "language": "python",
                "boilerplate": "def two_sum(nums, target):\n  # Write your code here and return your result\n return []"
            }
        ]
    },
    {
        'id':2,
        'name' :'Reverse String',
        'dificulty':'Easy',
        'type': 'string',
        'description':`Write a function that reverses a string. The input string is given as an array of characters s.
            You must do this by modifying the input array in-place with O(1) extra memory.`,
        'examples':[
            {
                "id": 1,
                "input": {"nums": ["h", "e", "l", "l", "o"]},
                "output": ["o", "l", "l", "e", "h"],
                "explanation": "Reverse the array."
            },
            {
                "id": 2,
                "input": {"nums": ["H", "a", "n", "n", "a", "h"]},
                "output": ["h", "a", "n", "n", "a", "H"],
                "explanation": "Reverse the array."
            },
            {
                "id": 3,
                "input": {"nums": ["a", "b", "c", "d", "e", "f", "g", "h"]},
                "output": ["h", "g", "f", "e", "d", "c", "b", "a"],
                "explanation": "Reverse the array."
            },
            {
                "id": 4,
                "input": {"nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]},
                "output": ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
                "explanation": "Reverse the array."
            },
            {
                "id": 5,
                "input": {"nums": ["r", "e", "v", "e", "r", "s", "e"]},
                "output": ["e", "s", "r", "e", "v", "e", "r"],
                "explanation": "Reverse the array."
            },
            {
                "id": 6,
                "input": {"nums": ["a", "b", "c", "d", "e", "f"]},
                "output": ["f", "e", "d", "c", "b", "a"],
                "explanation": "Reverse the array."
            },
            {
                "id": 7,
                "input": {"nums": ["a", "b", "c", "d", "e", "f", "g"]},
                "output": ["g", "f", "e", "d", "c", "b", "a"],
                "explanation": "Reverse the array."
            },
            {
                "id": 8,
                "input": {"nums": ["p", "a", "l", "i", "n", "d", "r", "o", "m", "e"]},
                "output": ["e", "m", "o", "r", "d", "n", "i", "l", "a", "p"],
                "explanation": "Reverse the array."
            },
            {
                "id": 9,
                "input": {"nums": ["t", "e", "s", "t", "c", "a", "s", "e"]},
                "output": ["e", "s", "a", "c", "t", "s", "e", "t"],
                "explanation": "Reverse the array."
            },
            {
                "id": 10,
                "input": {"nums": ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]},
                "output": ["d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h"],
                "explanation": "Reverse the array."
            }
        ],
        'constraints':[
            '1 <= s.length <= 105',
            's[i] is a printable ascii character.'
        ],
        'boilerPlates':[
            {
                "language": "javascript",
                "boilerplate": "function reverseString(nums) {\n  // Write your code here\n};"
            },
            {
                "language": "java",
                "boilerplate": "public List<String> reverseString(char[] nums) {\n  // Write your code here and return result; \n  return null; \n}"
            },
            {
                "language": "python",
                "boilerplate": "def reverse_string(nums):\n  # Write your code here\n"
            }
        ]        
    },
    {
        'id':3,
        'name' :'Next Greater Element',
        'dificulty':'Medium',
        'type': 'stack',
        'description':`The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
            You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
            For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
            Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.`,
        'examples' :[
            {
                'id':1,
                'input':{'nums1' : [4,1,2], 'nums2' : [1,3,4,2] },
                'output':[-1,3,-1],
                'explanation':`The next greater element for each value of nums1 is as follows:
                 \n - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
                 \n - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
                 \n - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
                `
            },
            {
                'id':2,
                'input':{'nums1' : [2,4], 'nums2' :[1,2,3,4] },
                'output':[3,-1],
                'explanation':`The next greater element for each value of nums1 is as follows:
                 \n - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
                 \n - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.`
            },
            {
                "id": 3,
                "input": {
                    "nums1": [5, 9, 2],
                    "nums2": [1, 5, 2, 6, 9, 3]
                },
                "output": [6, -1, 6]
            },
            {
                "id": 4,
                "input": {
                    "nums1": [7, 5, 3],
                    "nums2": [4, 7, 3, 5, 6, 8]
                },
                "output": [8, 6, 5]
            },
            {
                "id": 5,
                "input": {
                    "nums1": [1, 4, 6],
                    "nums2": [1, 2, 3, 4, 5, 6, 7, 8]
                },
                "output": [2, 5, 7]
            },
            {
                "id": 6,
                "input": {
                    "nums1": [2, 3, 6],
                    "nums2": [6, 5, 4, 3, 2, 1]
                },
                "output": [-1, -1, -1]
            },
            {
                "id": 7,
                "input": {
                    "nums1": [10, 15, 20],
                    "nums2": [5, 10, 15, 20, 25, 30]
                },
                "output": [15, 20, 25]
            },
            {
                "id": 8,
                "input": {
                    "nums1": [3, 7, 2],
                    "nums2": [7, 3, 2, 5, 8, 9]
                },
                "output": [5, 8, 5]
            },
            {
                "id": 9,
                "input": {
                    "nums1": [5, 1, 7],
                    "nums2": [3, 5, 1, 2, 7, 4, 6, 8]
                },
                "output": [7, 2, 8]
            },
            {
                "id": 10,
                "input": {
                    "nums1": [8, 9, 11],
                    "nums2": [12, 10, 8, 7, 9, 11]
                },
                "output": [9, 11, -1]     
            }
        ],
        'constraints':[
            '1 <= nums1.length <= nums2.length <= 1000',
            '0 <= nums1[i], nums2[i] <= 104',
            'All integers in nums1 and nums2 are unique.',
            'All the integers of nums1 also appear in nums2.'
        ],
        'boilerPlates':[
            {
                "language": "javascript",
                "boilerplate": "function nextGreaterElement(nums1, nums2) {\n  // Write your code here\n};"
            },
            {
                "language": "java",
                "boilerplate": "public List<Number> nextGreaterElement(int[] nums1, int[] nums2) {\n  // Write your code here and return result\n  return null; \n}"
            },
            {
                "language": "python",
                "boilerplate": "def next_greater_element(nums1, nums2):\n  # Write your code here\n"
            }
        ]        
    },
    {
        'id':4,
        'name' :'Linked List Cycle',
        'dificulty':'Medium',
        'type': 'linked-list',
        'description':`Given head, the head of a linked list, determine if the linked list has a cycle in it.
            There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
            Return true if there is a cycle in the linked list. Otherwise, return false.`,
        'examples' :[
            {
                'id':1,
                'input':{
                    'head' : [3,2,0,-4],
                    'pos' : 1
                },
                'output':true,
                'explanation':'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).'
            },
            {
                'id':2,
                'input':{
                    'head' : [1,2], 
                    'pos' : 0
                },
                'output':true,
                'explanation':'There is a cycle in the linked list, where the tail connects to the 0th node.'
            },
            {
                "id": 3,
                "input": {
                    "head": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    "pos": 5
                },
                "output": false
            },
            {
                "id": 4,
                "input": {
                    "head": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    "pos": 0
                },
                "output": true
            },
            {
                "id": 5,
                "input": {
                    "head": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
                    "pos": 4
                },
                "output": true
            },
            {
                "id": 6,
                "input": {
                    "head": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                    "pos": -1
                },
                "output": false
            },
            {
                "id": 7,
                "input": {
                    "head": [1],
                    "pos": -1
                },
                "output": false
            },
            {
                "id": 8,
                "input": {
                    "head": [1, 2],
                    "pos": -1
                },
                "output": false
            },
            {
                "id": 9,
                "input": {
                    "head": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                    "pos": -1
                },
                "output": false
            },
            {
                "id": 10,
                "input": {
                    "head": [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    "pos": 0
                },
                "output": true
            }
        ],
        'constraints':[
            'The number of the nodes in the list is in the range [0, 104].',
            '-105 <= Node.val <= 105',
            'pos is -1 or a valid index in the linked-list.'
        ],
        'boilerPlates':[
            {
                "language": "javascript",
                "boilerplate": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\nfunction hasCycle(head) {\n  // Write your code here\n};"
            },
            {
                "language": "java",
                "boilerplate": "/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\n public boolean hasCycle(ListNode head) {\n  // Write your code here\n  return true; \n}"
            },
            {
                "language": "python",
                "boilerplate": "class ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\ndef has_cycle(head):\n  # Write your code here\n"
            }
        ]
        
    },
    {
        'id':5,
        'name' :'Missing Number',
        'dificulty':'Easy',
        'type': 'binary-search',
        'description':'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
        'examples' :[
            {
                'id':1,
                'input':{'nums' : [3,0,1]},
                'output':2,
                'explanation':'n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.'
            },
            {
                'id':2,
                'input':{'nums' : [0,1]},
                'output':2,
                'explanation':'n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.'
            },
            {
                'id':3,
                'input':{'nums' : [0,3,2]},
                'output':1,
                'explanation':'n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 1 is the missing number in the range since it does not appear in nums.'
            },
            {
                "id": 4,
                "input": {"nums": [4, 2, 3, 0]},
                "output": 1,
                "explanation": "n = 4 since there are 4 numbers, so all numbers are in the range [0, 4]. 1 is the missing number in the range since it does not appear in nums."
            },
            {
                "id": 5,
                "input": {"nums": [5, 4, 3, 2, 1]},
                "output": 0,
                "explanation": "n = 5 since there are 5 numbers, so all numbers are in the range [0, 5]. 0 is the missing number in the range since it does not appear in nums."
            },
            {
                "id": 6,
                "input": {"nums": [9, 6, 4, 2, 3, 5, 7, 0, 1]},
                "output": 8,
                "explanation": "n = 9 since there are 9 numbers, so all numbers are in the range [0, 9]. 8 is the missing number in the range since it does not appear in nums."
            },
            {
                "id": 7,
                "input": {"nums": [0]},
                "output": 1,
                "explanation": "n = 1 since there is 1 number, so all numbers are in the range [0, 1]. 1 is the missing number in the range since it does not appear in nums."
            },
            {
                "id": 8,
                "input": {"nums": [1]},
                "output": 0,
                "explanation": "n = 1 since there is 1 number, so all numbers are in the range [0, 1]. 0 is the missing number in the range since it does not appear in nums."
            },
            {
                "id": 9,
                "input": {"nums": [1, 2]},
                "output": 0,
                "explanation": "n = 2 since there are 2 numbers, so all numbers are in the range [0, 2]. 0 is the missing number in the range since it does not appear in nums."
            },
            {
                "id": 10,
                "input": {"nums": [0, 2, 1]},
                "output": 3,
                "explanation": "n = 3 since there are 3 numbers, so all numbers are in the range [0, 3]. 3 is the missing number in the range since it does not appear in nums."
            }
        ],
        'constraints':[
            'n == nums.length',
            '1 <= n <= 104',
            'All the numbers of nums are unique.'
        ],
        'boilerPlates' :[
            {
                "language": "javascript",
                "boilerplate": "function missingNumber(nums) {\n  // Write your code here\n};"
            },
            {
                "language": "java",
                "boilerplate": "public int missingNumber(int[] nums) {\n  // Write your code here\n}"
            },
            {
                "language": "python",
                "boilerplate": "def missing_number(nums):\n  # Write your code here\n"
            }
        ]        
    },
    {
        'id':6,
        'name' :'Rotate Array',
        'value':'rotate-array',
        'dificulty':'Medium',
        'type': 'array',
        'description':'Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.',
        'examples' :[
            {
                'id':1,
                'input':{'nums' : [1,2,3,4,5,6,7], 'k' : 3},
                'output':[5,6,7,1,2,3,4],
                'explanation':'\n rotate 1 steps to the right: [7,1,2,3,4,5,6] \n rotate 2 steps to the right: [6,7,1,2,3,4,5] \n rotate 3 steps to the right: [5,6,7,1,2,3,4]'
            },
            {
                'id':2,
                'input':{'nums' : [-1,-100,3,99] , 'k': 2 },
                'output':[3,99,-1,-100],
                'explanation':'n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.'
            },
            {
                "id": 3,
                "input": {"nums": [1, 2, 3, 4, 5, 6, 7, 8, 9], "k": 8},
                "output": [2, 3, 4, 5, 6, 7, 8, 9, 1]
            },
            {
                "id": 4,
                "input": {"nums": [5, 6, 7, 8, 9, 10, 11, 12, 13], "k": 18},
                "output": [5, 6, 7, 8, 9, 10, 11, 12, 13]
            },
            {
                "id": 5,
                "input": {"nums": [-10, -5, 0, 5, 10], "k": 3},
                "output": [0, 5, 10, -10, -5]
            },
            {
                "id": 6,
                "input": {"nums": [7, 1, 5, 2, 3, 6, 4], "k": 100000},
                "output": [5,2,3,6,4,7,1]
            },
            {
                "id": 7,
                "input": {"nums": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "k": 15},
                "output": [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
            },
            {
                "id": 8,
                "input": {"nums": [4, 3, 2, 1], "k": 6},
                "output": [2, 1, 4, 3]
            },
            {
                "id": 9,
                "input": {"nums": [1, 2, 3, 4, 5, 6], "k": 9},
                "output": [4, 5, 6, 1, 2, 3]
            },
            {
                "id": 10,
                "input": {"nums": [100, 200, 300, 400, 500], "k": 12},
                "output": [400, 500, 100, 200, 300]
            }
        ],
        'constraints':[
            '1 <= nums.length <= 105',
            '-231 <= nums[i] <= 231 - 1',
            '0 <= k <= 105'
        ],
        'boilerPlates' :[
            {
                "language": "javascript",
                "boilerplate": "function rotate(nums,k) {\n  // Write your code here \n return [] \n};"
            },
            {
                "language": "java",
                "boilerplate": "public int[] rotate(int[] nums, int k) {\n  // Write your code here and return your result \n return null; \n}"
            },
            {
                "language": "python",
                "boilerplate": "def rotate(nums, k):\n  # Write your code here and return your result\n return []"
            },
        ]        
    },
    {
        'id':7,
        'name' :'Sort an Array',
        'value':'sort-an-array',
        'dificulty':'Medium',
        'type': 'array',
        'description':`Given an array of integers nums, sort the array in ascending order and return it.
           \n You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.`,
        'examples' :[
            {
                'id':1,
                'input':{'nums' : [5,2,3,1] },
                'output':[1,2,3,5],
                'explanation':'After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).'
            },
            {
                'id':2,
                'input':{'nums' : [5,1,1,2,0,0] },
                'output':[0,0,1,1,2,5],
                'explanation':' Note that the values of nums are not necessairly unique.'
            },
            {
                "id": 3,
                "input": {"nums": [1000, -1000, 0, 500, -500]},
                "output": [-1000, -500, 0, 500, 1000]
            },
            {
                "id": 4,
                "input": {"nums": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]},
                "output": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                "id": 5,
                "input": {"nums": [5, 7, 5, 7, 8, 8, 9, 9, 10, 10]},
                "output": [5, 5, 7, 7, 8, 8, 9, 9, 10, 10]
            },
            {
                "id": 6,
                "input": {"nums": [1, 5, 3, 7, 6, 2, 4, 8, 9, 10]},
                "output": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                "id": 7,
                "input": {"nums": [9, 8, 7, 6, 5, 4, 3, 2, 1]},
                "output": [1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
                "id": 8,
                "input": {"nums": [5, 10, -5, -10, 0]},
                "output": [-10, -5, 0, 5, 10]
            },
            {
                "id": 9,
                "input": {"nums": [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]},
                "output": [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
            },
            {
                "id": 10,
                "input": {"nums": [7, 1, 3, 9, 2, 8, 6, 4, 5]},
                "output": [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        ],
        'constraints':[
            '1 <= nums.length <= 5 * 104',
            '-5 * 104 <= nums[i] <= 5 * 104'
        ],
        'boilerPlates' :[
            {
                "language": "javascript",
                "boilerplate": "function sortArray(nums) {\n  // Write your code here \n return [] \n};"
            },
            {
                "language": "java",
                "boilerplate": "public int[] sortArray(int[] nums) {\n  // Write your code here and return your result \n return null; \n}"
            },
            {
                "language": "python",
                "boilerplate": "def sortArray(nums):\n  # Write your code here and return your result\n return []"
            },
        ]        
    }
]

module.exports = { dummyData }