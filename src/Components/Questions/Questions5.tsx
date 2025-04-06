const Question5 = ({ }) => {

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 5</div>
        <div className='whitespace-pre-line pl-[10px]'>
          Can you explain about the type of never and what is the differ with void?
        </div>
      </div >
      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <div className='whitespace-pre-line pl-[10px]'>
          【void 類型】
          <ul className="list-disc pl-5">
            <li>表示一個函數沒有顯式地返回值</li>
            <li>函數可能會正常執行結束，只是沒有 return 語句，或者 return 語句沒有返回任何值（例如 return;）。</li>
          </ul>
        </div>
        <div className='whitespace-pre-line pl-[10px]'>
          【never 類型】
          <ul className="list-disc pl-5">
            <li>表示一個函數永遠不會返回值，也就是說，函數永遠不會正常地執行結束</li>
            <li>因為它代表一個函式「不可能回來」，TypeScript 會用這個來幫你做 型別保證與窮盡判斷（exhaustiveness check）</li>
          </ul>
        </div>
      </div>
      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <pre className='whitespace-pre-line pl-[10px]'>
        </pre>
      </div>
    </>
  );
};

export default Question5;
