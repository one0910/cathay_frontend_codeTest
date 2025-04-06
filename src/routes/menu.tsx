
interface IRoute {
  path: string;
  name: string;
}

export const ROUTE_KEY = {
  HOME: 'home',
  QUESTION1_2: 'question1-2',
  QUESTION2_1: 'question2-1',
  QUESTION2_2: 'question2-2',
  QUESTION3: 'question3',
  QUESTION4: 'question4',
  QUESTION5: 'question5',
  QUESTION6: 'question6',
  QUESTION7: 'question7',
  QUESTION8: 'question8',
  QUESTION9_1: 'question9-anwser1',
  QUESTION9_2: 'question9-anwser2',
  QUESTION10: 'question10',

};

export const ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.HOME]: {
    path: '',
    name: '第1-1題',
  },
  [ROUTE_KEY.QUESTION1_2]: {
    path: 'question1-2',
    name: '第1-2題',
  },
  [ROUTE_KEY.QUESTION2_1]: {
    path: 'question2-1',
    name: '第2-1題',
  },
  [ROUTE_KEY.QUESTION2_2]: {
    path: 'question2-2',
    name: '第2-2題',
  },
  [ROUTE_KEY.QUESTION3]: {
    path: 'question3',
    name: '第3題',
  },
  [ROUTE_KEY.QUESTION3]: {
    path: 'question3',
    name: '第3題',
  },
  [ROUTE_KEY.QUESTION4]: {
    path: 'question4',
    name: '第4題',
  },
  [ROUTE_KEY.QUESTION5]: {
    path: 'question5',
    name: '第5題',
  },
  [ROUTE_KEY.QUESTION6]: {
    path: 'question6',
    name: '第6題',
  },
  [ROUTE_KEY.QUESTION7]: {
    path: 'question7',
    name: '第7題',
  },
  [ROUTE_KEY.QUESTION8]: {
    path: 'question8',
    name: '第8題',
  },
  [ROUTE_KEY.QUESTION9_1]: {
    path: 'question9-anwser1',
    name: '第9題(答案1)',
  },
  [ROUTE_KEY.QUESTION9_2]: {
    path: 'question9-anwser2',
    name: '第9題(答案2)',
  },
  [ROUTE_KEY.QUESTION10]: {
    path: 'question10',
    name: '第10題',
  },

};

export const routes = Object.keys(ROUTE_CONFIG).map(key => ({ ...ROUTE_CONFIG[key], key }))
export const getRouteByKey = (key: string) => ROUTE_CONFIG[key]
