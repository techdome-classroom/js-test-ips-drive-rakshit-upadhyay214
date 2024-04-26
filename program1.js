function smallestMissingPositiveInteger(nums) {
let l=0;
    let r=nums.length-1;
    while(l<=r){     
        while(l<nums.length && nums[l]>0){
            l++
        }
        while(r>=0 && nums[r]<=0){
            r--;
        }
        if(l<r){
            let t=nums[l];
            nums[l]=nums[r];
            nums[r]=t;
        }
    }
    for(let i=0;i<l;i++){  
        let ind=Math.abs(nums[i])-1;
        if(ind<l && nums[ind]>0) 
        nums[ind]=-nums[ind]
    }
    for(let i=0;i<l;i++){ 
        if(nums[i]>0)
        return i+1
    }
    return l+1
}
module.exports = smallestMissingPositiveInteger;
