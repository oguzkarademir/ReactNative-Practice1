import React from 'react';
import {View, Text} from 'react-native';
import MyBanner from './Components/MyBanner';
import MyButton from './Components/Button';

const App = () => {
  const food_data = [
    {
      id: 0,
      title: 'Corbalar',
      desc: 'Birbirinden leziz corbalar',
      color: '#e57373',
      isActive: false,
    },
    {
      id: 1,
      title: 'Salatalar',
      desc: 'Mukemmel salatalar',
      color: '#81d4fa',
      isActive: true,
    },
    {
      id: 2,
      title: 'Ana Yemekler',
      desc: 'Special Turk Mutfagi',
      color: '#ffd54f',
      isActive: false,
    },
    {
        id: 3,
        title: 'Tatlilar',
        desc: 'Muhtesem Tatlilar',
        color: 'lightgreen',
        isActive: true,
      }
  ];

  return (
    <View style={{flex: 1}}>
      <View>
        {food_data.map(food => {
          return (
            <MyBanner
              baslik={food.title}
              desc={food.desc}
              color={food.color}
              isActive={food.isActive}
            />
          );
        })}

        <MyButton buttonTitle='Yenile'></MyButton>

      </View>
    </View>
  );
};

export default App;
