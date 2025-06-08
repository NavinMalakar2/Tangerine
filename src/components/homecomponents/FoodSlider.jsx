import { useEffect, useState } from 'react';

const FoodSlider = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then(res => res.json())
      .then(data => {
        const mealData = data.meals || [];
        // Repeat images to prevent empty space
        setFoods([...mealData, ...mealData]); // Double the array
      });
  }, []);

  return (
    <div className="overflow-hidden  p-4 mt-5 mb-5">
      <div className="animate-marquee gap-6">
        {foods.map((food, index) => (
          <div key={index} className="min-w-[200px] bg-white rounded-lg shadow-md p-2 text-center">
            <img src={food.strMealThumb} alt={food.strMeal} className="h-32 w-full object-cover rounded-full" />
            <p className="text-gray-800 font-semibold mt-2">{food.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSlider;
