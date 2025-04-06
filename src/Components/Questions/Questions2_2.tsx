import './../../index.css'
const Questions2_2 = ({ }) => {

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 2-2</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`<div className="container">
                <div className="header">5/8 外出確認表</div>
                <div className="content">
                  <ol className="shop-list">
                    <li className="item">麵包</li>
                    <li className="item">短袖衣服</li>
                    <li className="item">飲用水</li>
                    <li className="item">帳篷</li>
                  </ol>
                  <ul className="shop-list">
                    <li className="item">暈車藥</li>
                    <li className="item">感冒藥</li>
                    <li className="item">丹木斯</li>
                    <li className="item">咳嗽糖漿</li>
                  </ul>
                </div>
                <div className="footer">以上僅共參考</div>
              </div>
              .container {
                font-size: 14px;
                }
                .container .header {
                font-size: 18px;
                }
                .container .shop-list {
                list-style: none;
                margin-left: -15px;
                }
                .container .shop-list li.item {
                color: green;
                }
                .container .shop-list .item {
                  Q2. /* Write styling make every other line give background color to next one */
                }
        `}
        </div>
      </div >

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line'>{`.container .shop-list .item:nth-child(even) {
            background-color: #f0f0f0;
          }
        `}
        </pre>
      </div>

      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <div className="container">
          <div className="header">5/8 外出確認表</div>
          <div className="content pl-4">
            <ol className="shop-list">
              <li className="item">麵包</li>
              <li className="item">短袖衣服</li>
              <li className="item">飲用水</li>
              <li className="item">帳篷</li>
            </ol>
            <ul className="shop-list">
              <li className="item">暈車藥</li>
              <li className="item">感冒藥</li>
              <li className="item">丹木斯</li>
              <li className="item">咳嗽糖漿</li>
            </ul>
          </div>
          <div className="footer">以上僅共參考</div>
        </div>
      </div>
    </>
  );
};

export default Questions2_2;
