/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let k = 0 ;
   for(let i =0 ; i < nums.length; i++)
   {
    if(nums[i] == val)
        {
            nums.splice(i,1);
            nums.push("_");
            i--;
        }
        else if(nums[i]=='_') break;
        else k++;
    }
    console.log(k,nums)
    return k
};