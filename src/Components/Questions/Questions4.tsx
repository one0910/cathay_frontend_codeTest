const Question4 = ({ }) => {

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 4</div>
        <div className='whitespace-pre-line pl-[10px]'>
          What is virtual DOM and what purpose does it aim to solve??
        </div>
      </div >
      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          【什麼是Vitural Dom】: Virtual DOM 是React對瀏覽器原生 DOM 的一個輕量級 JavaScript 表示法，
          React 並不直接修改真實 DOM，而是先改 虛擬 DOM，比較前後差異（diff），再用最少的 DOM 操作去更新畫面。
        </pre>
        <pre className='whitespace-pre-line pl-[10px]'>
          【它的主要目的用來做什麼】
          <ul className="list-disc pl-5">
            <li>避免直接操作DOM，用以提升效能， 直對對DOM的修改都會導致瀏覽器repain與reflow，這都算是高成本的效能消耗</li>
            <li>簡化開發，提高開發效率：React 會負責高效地更新真實 DOM，開發者只需要關注組件的狀態和屬性變化</li>
            <li>Virtual DOM 讓 UI 與資料保持一致狀態（單向數據流）</li>
          </ul>
        </pre>
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

export default Question4;
