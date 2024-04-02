


document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    searchMealByName(name);
});

function searchMealByName(name) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(response => response.json())
    .then(data => {
        displayResults(data.meals);
    })
    .catch(error => console.error('Error:', error));
}

function displayResults(meals) {
    const mealList = document.getElementById('mealList');
    mealList.innerHTML = '';

    if (meals) {
        meals.forEach(meal => {
            // Create a div element for the meal item
            const mealItem = document.createElement('div');
            mealItem.classList.add('meal-item'); // Add a CSS class for styling
            
            // Create an image element for the meal thumbnail
            const thumbnail = document.createElement('img');
            thumbnail.src = meal.strMealThumb; // Set the image source to the meal thumbnail URL
            thumbnail.alt = meal.strMeal; // Set the alt text to the meal name
            thumbnail.width = 100; // Set the width of the image (adjust as needed)
            mealItem.appendChild(thumbnail); // Append the thumbnail image to the meal item
            
            // Create a div for the meal content (name, ingredients, and button)
            const mealContent = document.createElement('div');
            
            // Create a paragraph element for the meal name
            const mealName = document.createElement('p');
            mealName.textContent = meal.strMeal; // Set the text content to the meal name
            mealContent.appendChild(mealName); // Append the meal name paragraph to the meal content
            
            // Create a paragraph element for the main ingredients
            const ingredients = document.createElement('p');
            ingredients.textContent = `Main Ingredients: ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}`; // Example: "Main Ingredients: Ingredient 1, Ingredient 2, Ingredient 3"
            mealContent.appendChild(ingredients); // Append the main ingredients paragraph to the meal content
            
            // Create a "Read More" button
            const readMoreButton = document.createElement('button');
            readMoreButton.textContent = 'Read More';
            // Add an event listener to the button to navigate to more.html with the meal ID as a query parameter
            readMoreButton.addEventListener('click', function() {
                window.location.href = `more.html?id=${meal.idMeal}`; // Assuming the meal ID is stored in a property named "idMeal"
            });
            mealContent.appendChild(readMoreButton); // Append the button to the meal content
            
            // Append the meal content to the meal item
            mealItem.appendChild(mealContent);
            
            // Append the meal item to the meal list
            mealList.appendChild(mealItem);
        });
    } else {
        const listItem = document.createElement('div');
        listItem.textContent = 'No meals found';
        mealList.appendChild(listItem);
    }
}
