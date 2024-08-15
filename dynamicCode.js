
                function missingNumber(nums) {
  // Write your code here
  let n= nums.length;
    let obj={}
    for(let i=0; i<n; i++)
    {
        if(obj[nums[i]] == undefined)
        {
            obj[nums[i]]=1;
        }
    }
    let r = 0
    for(let i in obj)
    {
        if(r != i)
        {
            return r;
        }else {
            r++
        }
    }
    // console.log(obj)
    return Object.keys(obj).length
};
                let nums = [0,2,1];
                var result = missingNumber(nums);
                console.log(result)
            