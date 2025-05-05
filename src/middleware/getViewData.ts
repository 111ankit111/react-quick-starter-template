import type { CardViewModel } from '../types/types';
import responseData from '../data/rows.json';

export function getData(): CardViewModel[] {
  return responseData.data.map(item => {
    return {
      name: item[11],
      borough: item[16],
      dayTimeRoute: item[13],
      icon:
        item[10] === 0 ? 'not-accessible' : item[10] === 1 ? 'fully accessible' : 'not accessible',
    } as CardViewModel;
  });
}
