const Question6 = ({ }) => {

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 6</div>
        <div className='whitespace-pre-line pl-[10px]'>
          What is difference between framework base website and normal website (none
          framework
        </div>
      </div >
      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line pl-[10px]'>


          <div className="relative overflow-x-auto shadow-md  mt-2">
            <table className="w-[60%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    比較項目
                  </th>
                  <th scope="col" className="px-6 py-3">
                    使用框架的網站（如 React/Vue）
                  </th>
                  <th scope="col" className="px-6 py-3">
                    非框架網站（純原生）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    開發效率
                  </th>
                  <td className="px-6 py-4">
                    高，元件化、可重用、結構清晰
                  </td>
                  <td className="px-6 py-4">
                    低，需自行管理 DOM 與狀態
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    維護性
                  </th>
                  <td className="px-6 py-4">
                    好，支援模組化開發、多人協作
                  </td>
                  <td className="px-6 py-4">
                    差，容易變成 spaghetti code
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    功能模組支援
                  </th>
                  <td className="px-6 py-4">
                    有路由、狀態管理、表單驗證等套件支援
                  </td>
                  <td className="px-6 py-4">
                    自己手寫或額外引入第三方函式庫
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    初學門檻
                  </th>
                  <td className="px-6 py-4">
                    稍高，需要理解框架原理（如 Virtual DOM）
                  </td>
                  <td className="px-6 py-4">
                    較低，HTML+CSS+JS 就可上手
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    效能表現
                  </th>
                  <td className="px-6 py-4">
                    較佳（透過 Virtual DOM、編譯優化）
                  </td>
                  <td className="px-6 py-4">
                    初期快，但後期難維護、易產生效能瓶頸
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    適合的場景
                  </th>
                  <td className="px-6 py-4">
                    大型網站、互動多、多人開發、SPA、RWD
                  </td>
                  <td className="px-6 py-4">
                    小型頁面、靜態網頁、Demo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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

export default Question6;
