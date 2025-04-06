import { ROUTE_KEY } from './menu';
import Questions1_1 from '../Components/Questions/Questions1_1';
import Questions1_2 from '../Components/Questions/Questions1_2';
import Questions2_1 from '../Components/Questions/Questions2_1';
import Questions2_2 from '../Components/Questions/Questions2_2';
import Question3 from '../Components/Questions/Questions3';
import Question4 from '../Components/Questions/Questions4';
import Question5 from '../Components/Questions/Questions5';
import Question6 from '../Components/Questions/Questions6';
import Question7 from '../Components/Questions/Questions7';
import Question8 from '../Components/Questions/Questions8';
import Question9_1 from '../Components/Questions/Questions9(Answer1)';
import Question9_2 from '../Components/Questions/Questions9(Answer2)';
import Questions10 from '../Components/Questions/Questions10';




export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Questions1_1,
  [ROUTE_KEY.QUESTION1_2]: Questions1_2,
  [ROUTE_KEY.QUESTION2_1]: Questions2_1,
  [ROUTE_KEY.QUESTION2_2]: Questions2_2,
  [ROUTE_KEY.QUESTION3]: Question3,
  [ROUTE_KEY.QUESTION4]: Question4,
  [ROUTE_KEY.QUESTION5]: Question5,
  [ROUTE_KEY.QUESTION6]: Question6,
  [ROUTE_KEY.QUESTION7]: Question7,
  [ROUTE_KEY.QUESTION8]: Question8,
  [ROUTE_KEY.QUESTION9_1]: Question9_1,
  [ROUTE_KEY.QUESTION9_2]: Question9_2,
  [ROUTE_KEY.QUESTION10]: Questions10,


};
