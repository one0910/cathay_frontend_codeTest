import { createContext, useReducer, useContext, ReactNode, Dispatch } from "react";
import Question9_2Img from './../../assets/Question9_Answner2.jpg'
// 1. 定義 State 型別
interface RootState {
  name: string;
  age: number;
}

// 2. 定義 Action 型別
interface RootAction {
  type: "SET_NAME" | "SET_AGE";
  payload: any;
}

// 3. 建立初始 state
const infoInitialState: RootState = {
  name: "Naro",
  age: 12,
};

// 4. 建立 reducer function
function RootReducer(state: RootState, action: RootAction): RootState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
}

// 5. 建立 Context 型別
interface InfoContextType {
  state: RootState;
  dispatch: Dispatch<RootAction>;
}

// 6. 建立 context 並給予初始值
const InfoContext = createContext<InfoContextType | undefined>(undefined);

// 7. RootProvider 加上 props 型別
function RootProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(RootReducer, infoInitialState);
  console.log(`state => `, state)
  return (
    <InfoContext.Provider value={{ state, dispatch }}>
      {children}
    </InfoContext.Provider>
  );
}

// ✅ 使用 context 的元件
function ChildComponent() {
  const { state, } = useContext(InfoContext)!
  return (
    <div className="p-3 border border-red-600 mt-2">
      <h4 className="text-red-600">ChildComponent</h4>
      <p>Age: {state.age}</p>
      <p>Age: {state.name}</p>
      <GrandchildComponent />
    </div>
  );
}

function GrandchildComponent() {
  const { state } = useContext(InfoContext)!;
  return (
    <div className="p-2 border border-blue-600 mt-2">
      <h4 className="text-blue-600">GrandchildComponent</h4>
      <p>GName: {state.name}</p>
      <p>Age: {state.age}</p>
    </div>
  );
}

const Question9_2 = () => {
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
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer2</div>
        <div className='whitespace-pre-line pl-[10px]'>
          <ul className="list-disc pl-2">
            <li>這是一個 Prop Drilling的問題，就是跨層傳遁資料，這裡我使了較為復雜但是是可維護性及擴展性較高的方式，Contex+Reducer的方式來優化這段程式碼</li>
            <img src={Question9_2Img} alt="" />
          </ul>
        </div>
      </div>

      {/* Result */}
      <div className="mb-[20px]">
        <div className="bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold">Result</div>
        <div className="whitespace-pre-line pl-[10px] bg-gray-100 mt-2">
          <RootProvider>
            <h2>ParentComponent</h2>
            <ChildComponent />
            {/* <GrandchildComponent /> */}
          </RootProvider>
        </div>
      </div>
    </>
  );
};

export default Question9_2;
