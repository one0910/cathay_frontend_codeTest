import './../../index.css'
const Questions2_1 = ({ }) => {

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 2-1</div>
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
                Q1. /* Explain why does this color not works, and how to fix make it work on 1st list */
                color: blue;
                }
        `}
        </div>
      </div >

      {/* Reaseon */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Reason</div>
        <p>{`因為.container .shop-list li.item {}的CSS權重高於.container .shop-list .item {}`}</p>
      </div>
      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line'>{`只需將其對應的CSS選擇器提升其權重，就能吃到CSS的樣式了
        .container .content ol.shop-list li.item {
          color: blue;
        }
        `}</pre>
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

export default Questions2_1;
