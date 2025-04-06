import users from '../../utils';

const Questions1_2 = ({ }) => {
  type Profession = 'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics';

  const priorityMap = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  const sortByType = [...users].sort((a, b) => {
    return priorityMap[a.profession as Profession] - priorityMap[b.profession as Profession];
  });

  return (
    <>
      {/* Question */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 1-2</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`There is an array, each item has such format:
        {firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
        lastName, note can be empty, customerID can only be a set of digital numbers.
        profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
        Please sort by ‘profession’ to follow the principle.
        (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
        `}
        </div>
      </div >

      {/* Answer */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answer</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          {`type Profession = 'student' | 'freelancer' | 'productOwner' | 'engineer' | 'systemAnalytics';

            const priorityMap = {
              systemAnalytics: 1,
              engineer: 2,
              productOwner: 3,
              freelancer: 4,
              student: 5,
            };

            const sortByType = [...users].sort((a, b) => {
              return priorityMap[a.profession as Profession] - priorityMap[b.profession as Profession];
            });
          `}
        </pre>
      </div>

      {/* Result */}
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          {JSON.stringify(sortByType, null, 2)}
        </pre>
      </div>
    </>
  );
};

export default Questions1_2;
