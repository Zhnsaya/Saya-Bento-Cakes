import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MealDetails.css";
import APIService from "../Services/APIService";

const MealDetails = () => {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    async function fetchMealDetails() {
      try {
        const mealDetailsData = await APIService.getMealDetails(id);

        if (mealDetailsData) {
          setMealDetails(mealDetailsData);
        } else {
          console.error("Meal details not found.");
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    fetchMealDetails();
  }, [id]);

  if (!mealDetails) {
    return <p>Loading...</p>;
  }

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
    strInstructions,
    strYoutube,
    strSource,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = mealDetails;

  return (
    <div className="cakeDetails">
      <h2>{strMeal}</h2>
      <img src={strMealThumb} alt={strMeal} />
      <p>Category: {strCategory}</p>
      <p>Area: {strArea}</p>
      <p>Tags: {strTags}</p>
      <p>Instructions: {strInstructions}</p>
      <p>Ingredients:</p>
      <ul>
        <li>
          {strMeasure1} {strIngredient1}
        </li>
        <li>
          {strMeasure2} {strIngredient2}
        </li>
        <li>
          {strMeasure3} {strIngredient3}
        </li>
        <li>
          {strMeasure4} {strIngredient4}
        </li>
        <li>
          {strMeasure5} {strIngredient5}
        </li>
        <li>
          {strMeasure6} {strIngredient6}
        </li>
        <li>
          {strMeasure7} {strIngredient7}
        </li>
        <li>
          {strMeasure8} {strIngredient8}
        </li>
      </ul>
      <p>
        Video:{" "}
        <a href={strYoutube} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </p>
      <p>
        Source:{" "}
        <a href={strSource} target="_blank" rel="noopener noreferrer">
          {strSource}
        </a>
      </p>
    </div>
  );
};

export default MealDetails;
