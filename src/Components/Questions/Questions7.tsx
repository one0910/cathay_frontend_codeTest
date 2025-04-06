import { useState } from "react";
import Question7Img from './../../assets/Question7_Answner.jpg'

type TaskMap = {
  Alice: number;
  Bob: number;
};

function TaskCounter({ name, tasks, onCompleteTask }: {
  name: 'Alice' | 'Bob';
  tasks: TaskMap;
  onCompleteTask: (name: 'Alice' | 'Bob') => void
}) {
  return (
    <>
      <h1>{name}'s tasks: {tasks[name]}</h1>
      <button className="bg-gray-300 rounded-md p-1 mr-2" onClick={() => onCompleteTask(name)}>
        Complete Task
      </button>
    </>
  );
}

const Question7 = ({ }) => {
  const [isPersonAlice, setIsPersonAlice] = useState(true);
  const [tasks, setTasks] = useState<TaskMap>({ Alice: 0, Bob: 0 });

  const handleCompleteTask = (name: 'Alice' | 'Bob') => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [name]: prevTasks[name] + 1,
    }));
  };

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 7</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`ead the code below, please figure out why after “Switch Person” button clicked, the
            tasks state doesn’t update correctly, and how to make it update as we expected **/
            /** Code block start */
            import { useState } from 'react';
            export default function TaskManager() {
            const [isPersonAlice, setIsPersonAlice] = useState(true);
            return (
            <div>
            {isPersonAlice ? (
            <TaskCounter name="Alice" />
            ) : (
            <TaskCounter name="Bob" />
            )}
            <button onClick={() => {
            setIsPersonAlice(!isPersonAlice);
            }}>
            Switch Person
            </button>
            </div>
            );
            }
            function TaskCounter({ name }) {
            const [tasks, setTasks] = useState(0);
            return (
            <>
            <h1>{name}'s tasks: {tasks}</h1>
            <button onClick={() => setTasks(tasks + 1)}>
            Complete Task
            </button>
            </>
            );}`}
        </div>
      </div >

      {/* Reaseon */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Reason</div>
        {`因為原本程式碼中的TaskCounter組件，並沒有針對不同的Person去做狀態的更新，所以才會造成切換Person時，沒有相對應的狀態資料`}
      </div>

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <div className='whitespace-pre-line pl-[10px]'>
          <ul className="list-disc pl-2">
            <li>一般做法是在TaskCounter的組件裡，設置其Person所相對應的tasks狀態，然後按下Complete Task時，針對不同Person，而做不同的更新</li>
            <li>比較高階的做法，在父層組件設置Person所相對應的tasks狀態，然後再將其狀態及回調函式往子層TaskCounter做傳送，這樣做的好處除了讓子組件TaskCounter變的比較單純，也可讓其他子組件共同其父層的狀態及資料，也比較符合React中處理共享 state 的常見模式</li>
            <img src={Question7Img} alt="" />
          </ul>
        </div>
      </div>

      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <div className='pl-[10px]'>
          <div>
            {isPersonAlice ? (
              <TaskCounter name="Alice" tasks={tasks} onCompleteTask={handleCompleteTask} />
            ) : (
              <TaskCounter name="Bob" tasks={tasks} onCompleteTask={handleCompleteTask} />
            )}
            <button className="bg-gray-300 rounded-md p-1" onClick={() => {
              setIsPersonAlice(!isPersonAlice);
            }}>
              Switch Person
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question7;