import { useRef, useCallback } from 'react';
import Question10Img from './../../assets/Question10_Answner.jpg'

function SearchButton({ onSearchButtonClick }: { onSearchButtonClick: () => void }) {
  return (
    <button
      onClick={onSearchButtonClick}
      className="bg-gray-200 rounded-md p-1 my-2"
    > SearchButton </button>
  );
}

function SearchInput({ inputRef }: { inputRef: React.RefObject<HTMLInputElement> }) {
  return (
    <input
      ref={inputRef}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm pl-2 py-1"
    />
  );
}

const Questions10 = ({ }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef])

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 3</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`Read about the code below, achieving that make input element in “SearchInput” to be
            focused while search button on click **/
            
            /** Code block start */
            function SearchButton() {
            return (
            <button> Search </button>
            );
            }
            function SearchInput() {
            return (
            <input/>
            );
            }
            export default function Page() {
            return (
            <>
            <nav>
            <SearchButton />
            </nav>
            <SearchInput />
            </>
            );
            }`}
        </div>
      </div >

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          這是一個跨元件操作的題目，由於SearchButton 和 SearchInput 是同一層的兄弟元件，所以設計使用lifting ref up的模式，在父層這裡統一做操作
          <img src={Question10Img} />
        </pre>
      </div>

      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          <nav>
            <SearchButton onSearchButtonClick={handleSearchButtonClick} />
          </nav>
          <SearchInput inputRef={inputRef} />
        </pre>
      </div>
    </>
  );
};

export default Questions10;
