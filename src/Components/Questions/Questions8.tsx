import { ChangeEvent, useEffect, useState, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form"
import Question8Img from './../../assets/Question8_Answner.jpg'

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  studyPoint: number;
};

function CourseInfo({ courseName, basePoints, sumPoints, handleStudyPointsChange }: {
  courseName: string,
  basePoints: number,
  sumPoints: number,
  handleStudyPointsChange: (e: ChangeEvent<HTMLInputElement>, course: string) => void
}) {

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    handleStudyPointsChange(event, courseName)
  }

  return (
    <>
      <p>課程名稱: {courseName}
      </p>
      <label>學習點數: </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm pl-2 py-1"
        type="number"
        value={basePoints}
        onChange={changeHandler}
      />
      <p>總累積點數: {sumPoints}</p>
    </>
  )
}

const Question8 = ({ }) => {
  const { register, getValues, control } = useForm();
  const watchForm = useWatch({ control, name: ['courseId'] });
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '學習 React', completed: false, studyPoint: 3 },
    { id: 2, text: '建立專案', completed: false, studyPoint: 1 }
  ]);

  const [courseName, setCourseName] = useState<string>('')
  const [basePoints, setBasePoints] = useState<number>(3);
  // const [sumPoints, setSumPoints] = useState<number>(0);

  const sumPoints = useMemo(() => {
    return todos.reduce((sum, todo) => sum + todo.studyPoint, 0);
  }, [todos]);

  const toggleTodo = (id: number) => {
    const select = Object.values(todos).filter(value => value.id === id)[0]
    // const totalPoints = todos.reduce((sum, course) => sum + course.studyPoint, 0);
    setCourseName(select['text'])
    setBasePoints(select['studyPoint'])
    // setSumPoints(totalPoints)

  };

  const handleStudyPointsChange = (e: ChangeEvent<HTMLInputElement>, course: string) => {
    const newVal = parseInt(e.target.value) || 0;
    const newTodos = todos.map(todo =>
      todo.text === course ? { ...todo, completed: !todo.completed, studyPoint: newVal } : todo
    );
    // const totalPoints = newTodos.reduce((sum, course) => sum + course.studyPoint, 0);

    setTodos(newTodos);
    setBasePoints(newVal);
    // setSumPoints(totalPoints)

  };

  useEffect(() => {
    toggleTodo(Number(getValues().courseId))
  }, [watchForm])



  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 8</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`Read about the code below, please describe the issues and how you will be going to
            improve it **/
            /** Code block start */
            const TodoList = () => {
            const [todos, setTodos] = useState([
            { id: 1, text: '學習 React', completed: false, studyPoint: 3 },
            { id: 2, text: '建立專案', completed: false, studyPoint: 1 }
            ]);
            const { id, text, studyPoint } = todos;
            const [basePoints, setbasePoints] = useState(3);
            const [sumPoints, setSumPoints] = useState(0);
            const toggleTodo = (id) => {
            const todo = todos.find(t => t.id === id);
            todo.completed = !todo.completed;
            setTodos(todos);
            };
            const handleStudyPointsChange = (e) => {
            basePoints(e.target.value);
            setSumPoints(parseInt(value1) + parseInt(e.target.value));
            };
            return (
            <div>
            <p>課程名稱: {text}</p>
            <label>學習點數: </label>
            <input type="number" value={studyPoint} onChange={handleStudyPointsChange} />
            <p>總累積點數: {sumPoints}</p>
            <button onClick={toggleTodo(id)}>篩選課程</button>
            </div>
            );
          }`}
        </div>
      </div >

      {/* Reaseon */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Reason</div>
        <ul className="list-disc pl-5">
          <li>當點擊篩選課程課程的按鈕時，總累積點數沒有反應</li>
          <li>原始程式碼的設計並不良，資料、狀態無法有效管理
            <ul className="list-decimal pl-3">
              <li>{`const { id, text, studyPoint } = todos; ❌ 由於todos是陣列，不能直接解構`}</li>
              <li className="whitespace-pre-line">
                {`const todo = todos.find(t => t.id === id);
                  todo.completed = !todo.completed;
                  setTodos(todos);
                  ❌ 這是直接修改原始 state（mutate），不符合 React 的不可變性
                  `}
              </li>
              <li>{`basePoints(e.target.value); ❌ 錯誤使用狀態 setter`}</li>
              <li>{`setSumPoints(parseInt(value1) + parseInt(e.target.value)); ❌ 使用了未定義的變數 value1，導致錯誤。`}</li>
              <li>{`<button onClick={toggleTodo(id)}>篩選課程</button>  ❌ 這一行的 toggleTodo() 會在 render 時就執行，不是點擊才執行`}</li>
              <li>{` ❌ 元件沒有拆分，狀態及資料難以管理。`}</li>
            </ul>
          </li>
        </ul>

      </div>

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <div className='whitespace-pre-line pl-[10px] pt-3'>
          <img src={Question8Img} alt="" />
        </div>
      </div>

      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <div className='pl-[10px]'>
          <CourseInfo
            courseName={courseName}
            basePoints={basePoints}
            sumPoints={sumPoints}
            handleStudyPointsChange={handleStudyPointsChange}
          />
          {/* <button type="button" className="bg-gray-200 rounded-md p-1" onClick={() => toggleTodo(id)}>篩選課程</button> */}
          <select {...register("courseId", {
            required: {
              value: true,
              message: 'course'
            }
          })}
            className="bg-gray-200 rounded-md p-1"
          >
            {todos.map((data) => (
              <option
                key={data.id}
                value={data.id}
              >{data.text}</option>
            ))}
          </select>
        </div>

      </div>
    </>
  );
};

export default Question8;
