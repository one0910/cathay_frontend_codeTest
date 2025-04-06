import './../../index.css'
const Question3 = ({ }) => {

  const items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

  function getValues(arr: number[], type: 'unique' | 'deduplication'): number[] {
    const map: Record<number, number> = {};
    arr.forEach(n => {
      map[n] = (map[n] || 0) + 1;
      // console.log(`map => `, map)
    });

    if (type === 'unique') {
      return Object.keys(map).filter(key => (map[+key] === 1)).map((arr) => Number(arr));
    } else if (type === 'deduplication') {
      return [...new Set(items)]
    }
    return []
  }

  const uniqueValues = getValues(items, 'unique');
  const deduplicateValues = getValues(items, 'deduplication');

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 3</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
            Please write down a function to console log unique value from this array.`}
        </div>
      </div >

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          {`function getValues(arr: number[], type: 'unique' | 'deduplication'): number[] {
              const map: Record<number, number> = {};
              arr.forEach(n => {
                map[n] = (map[n] || 0) + 1;
              });
          
              if (type === 'unique') {
                return Object.keys(map).filter(key => (map[+key] === 1)).map((arr) => Number(arr));
              } else if (type === 'deduplication') {
                return [...new Set(items)]
              }
              return []
            }
            const uniqueValues = getValues(items, 'unique');
            const deduplicateValues = getValues(items, 'deduplication');
            console.log(uniqueValues);
            console.log(deduplicateValues);`}
        </pre>
      </div>

      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <pre className='pl-[10px]'>
          只出現過「一次」的值: [{uniqueValues.join(', ')}]
        </pre>
        <pre className='pl-[10px]'>
          所有不重複的值: [{deduplicateValues.join(', ')}]
        </pre>
      </div>
    </>
  );
};

export default Question3;
