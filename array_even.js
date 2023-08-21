const numbers=[10,5,3,8];
function even_count(arr)
{
  let count=0;
  let i=0;
   while(i<arr.length)
    {
        if(arr[i] %2==0)
        {
            count++;
         }
         i++;
    }
    console.log(count);
}
const res=even_count(numbers);
