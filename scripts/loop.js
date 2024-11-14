const myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      { place: "Rexburg, ID", length: "5 years" },
      { place: "Ammon, ID", length: "3 years" },
      { place: "Sandy, UT", length: "1 year" },
    ],
  };
  
  // Step 4 & 5: Loop through each favorite food and create an <li> element for each, appending it to the <ul> element with the ID of "favorite-foods"
  const favoriteFoodsList = document.querySelector("#favorite-foods");
  
  myInfo.favoriteFoods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });
  

