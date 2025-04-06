import { createContext, useContext, useState } from "react";
import Question9_1Img from './../../assets/Question9_Answner1.jpg'

const InfoContext = createContext<{ name: string; age: number } | null>(null);

function ChildComponent() {
  const context = useContext(InfoContext);
  if (!context) return null;

  return (
    <div className="p-3 border border-red-600 mt-2">
      <h4 className="text-red-600">ChildComponent</h4>
      <p>Name: {context.name}</p>
      <p>Age: {context.age}</p>
      <GrandchildComponent />
    </div>
  );
}

function GrandchildComponent() {
  const context = useContext(InfoContext);
  if (!context) return null;

  return (
    <div className="p-2 border border-blue-600 mt-2">
      <h4 className="text-blue-600">GrandchildComponent</h4>
      <p>Name: {context.name}</p>
      <p>Age: {context.age}</p>
    </div>
  );
}

const Question9_1 = () => {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);
  return (
    <>
      {/* Question */}
      <div className="mb-[20px]">
        <div className="bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold">Question 9</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`Read about the code below, suggest how to improve the code
          /** Code block start */
          function ParentComponent() {
            const [name, setName] = useState("Naro");
            const [age, setAge] = useState(12);
            return (
            <div>
            <ChildComponent name={name} age={age} />
            <GrandchildComponent name={name} age={age} />
            </div>
            );
            }
            function ChildComponent({ name, age }) {
            return (
            <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <GrandchildComponent name={name} age={age} />
            </div>
            );
            }
            function GrandchildComponent({ name, age }) {
            return (
            <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            </div>
            );}
            /
            ** Code block end */`}

        </div>
      </div>

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer1</div>
        <div className='whitespace-pre-line pl-[10px]'>
          <ul className="list-disc pl-2">
            <li>這是一個 Prop Drilling的問題，就是跨層傳遁資料，比較簡單的方式是useState + Context</li>
            <img src={Question9_1Img} alt="" />
          </ul>
        </div>
      </div>

      {/* Result */}
      <div className="mb-[20px]">
        <div className="bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold">Result</div>
        <div className="whitespace-pre-line pl-[10px]">
          <div className="p-4 border rounded bg-gray-100">
            <InfoContext.Provider value={{ name, age }}>
              <h2>ParentComponent</h2>
              <ChildComponent />
              {/* <GrandchildComponent /> */}
            </InfoContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question9_1;
