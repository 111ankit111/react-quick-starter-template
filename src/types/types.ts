import type { ReactNode } from 'react';

export interface CardViewModel {
  name: string;
  borough: string;
  dayTimeRoute: string;
  icon: ReactNode;
}
