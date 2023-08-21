const arr=[5,18,10,15]
function maxnum(num)
{
    let max=5;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
    
}
const res=maxnum(arr);
console.log(res);
