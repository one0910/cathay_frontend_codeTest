import users from '../../utils';

const Questions1_1 = ({ }) => {

  const sortedUsers = [...users].sort((a, b) => {
    const strA = (a.firstName || '') + (a.lastName || '') + (a.customerID || '');
    const strB = (b.firstName || '') + (b.lastName || '') + (b.customerID || '');
    return strA.localeCompare(strB);
  });
  console.log(`sortedUsers => `, sortedUsers)

  return (
    <>
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Question 1-1</div>
        <div className='whitespace-pre-line pl-[10px]'>
          {`There is an array, each item has such format:
        {firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
        lastName, note can be empty, customerID can only be a set of digital numbers.
        profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
        `}
          <h2>Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.</h2>
        </div>
      </div >

      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Answewr</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          {`const sortedUsers = [...users].sort((a, b) => {
          const strA = (a.firstName || '') + (a.lastName || '') + (a.customerID || '');
          const strB = (b.firstName || '') + (b.lastName || '') + (b.customerID || '');
          return strA.localeCompare(strB);
        });`}
        </pre>
      </div>
      <div className='mb-[20px]'>
        <div className='bg-[#ddd] border-l-[5px] border-solid border-l-[#aaa] py-[5px] pl-2 font-semibold'>Result</div>
        <pre className='whitespace-pre-line pl-[10px]'>
          {sortedUsers.map((u, i) => {
            return <div key={i}>{JSON.stringify(u)}</div>
          }
          )}
        </pre>
      </div>
    </>
  );
};

export default Questions1_1;
