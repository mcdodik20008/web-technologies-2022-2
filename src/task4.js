function doThisBro(nums, target) {
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        for (var j = i+1; j < n; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return "i can't..."
}

console.log(doThisBro([2, 11, 15, 7], 9))
console.log(doThisBro([2, 11, 15, 66], 9))