import React from 'react'
import "../css/Country.css";

export default function Countries() {
  const satisfiedCountries = [
    { name: "Pakistan", image: "https://cdn.pixabay.com/photo/2022/11/18/14/27/flag-7600240_1280.jpg", satisfaction: 90 },
    { name: "Canada", image: "https://cdn.pixabay.com/photo/2017/08/25/20/04/international-2681245_1280.jpg", satisfaction: 85 },
    { name: "Germany", image: "https://cdn.pixabay.com/photo/2017/08/29/22/10/germany-2695058_1280.jpg", satisfaction: 80 },
    { name: "Australia", image: "https://cdn.pixabay.com/photo/2017/08/28/18/51/international-2690850_1280.jpg", satisfaction: 95 },
    { name: "Japan", image: "https://cdn.pixabay.com/photo/2017/08/29/12/47/international-2693231_1280.jpg", satisfaction: 88 },
    { name: "UK", image: "https://cdn.pixabay.com/photo/2020/11/08/15/47/flag-5724142_1280.jpg", satisfaction: 82 },
    { name: "France", image: "https://cdn.pixabay.com/photo/2015/10/17/23/07/flag-993627_1280.jpg", satisfaction: 78 },
    { name: "Afghanistan", image: "https://media.istockphoto.com/id/1251374765/photo/the-national-flag-of-afghanistan.jpg?s=612x612&w=0&k=20&c=3p-_WkQVJxdGNQxUY3oIxpwHEdDAG0QJQ3ytf8uogMg=", satisfaction: 84 },
    { name: "Brazil", image: "https://cdn.pixabay.com/photo/2017/08/28/19/01/international-2690912_1280.jpg", satisfaction: 76 },
    { name: "South Korea", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png", satisfaction: 89 },
    { name: "China", image: "https://cdn.pixabay.com/photo/2020/03/30/16/36/asia-4984773_1280.jpg", satisfaction: 78 },
    { name: "UAE", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png", satisfaction: 84 },
    { name: "Mexico", image: "https://cdn.pixabay.com/photo/2017/12/06/10/57/mexican-flag-3001452_1280.png", satisfaction: 76 },
    { name: "Bangladesh", image: "https://cdn.pixabay.com/photo/2017/08/28/18/53/international-2690863_1280.jpg", satisfaction: 89 },
    { name: "Algeria", image: "https://cdn.pixabay.com/photo/2017/08/26/23/35/international-2684751_1280.jpg", satisfaction: 60 },
  ];

   // Sort countries by satisfaction level (high to low)
   const sortedCountries = satisfiedCountries.sort(
    (a, b) => b.satisfaction - a.satisfaction
  );
  return (
    <div>
      
 {/* Top Satisfied Countries Section */}
 <div className="satisfied-countries-section">
        <h2>Top Satisfied Countries</h2>
        <div className="countries-container">
          {sortedCountries.map((country, index) => (
            <div className="country-card" key={index}>
              <img src={country.image} alt={country.name} className="country-image" />
              <h3>{country.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${country.satisfaction}%` }}
                ></div>
              </div>
              <p>{country.satisfaction}% Satisfaction</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
