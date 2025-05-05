import './App.css';

import { useEffect, useState } from 'react';

import Card from './components/Card';
import type { CardViewModel } from './types/types';
import { getData } from './middleware/getViewData';

function App() {
  const [stationData, setStationData] = useState<CardViewModel[]>([]);
  const [filterBoroughKey, setFilterBoroughKey] = useState('Bx');

  useEffect(() => {
    const data = getData();
    const filtteredByBorough = data.filter(item => item.borough === filterBoroughKey);
    setStationData(filtteredByBorough);
  }, []);

  return stationData.map((item, index) => (
    <Card
      key={index}
      name={item.name}
      borough={item.borough}
      dayTimeRoute={item.dayTimeRoute}
      icon={item.icon}
    />
  ));
}

export default App;
