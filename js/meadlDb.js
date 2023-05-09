const loadMeal=(item)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
    fetch(url)
    .then(res=> res.json())
    .then(data=>displayMeal(data.meals))


}


const displayMeal=(mealMenu3)=>{
    console.log(mealMenu3);
    const MealContainer=document.getElementById("displayMeal");
     MealContainer.innerText='';
    mealMenu3.forEach(kabar => {
        const mealDiv=document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="card">
                <img src="${kabar.strMealThumb
                }" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${kabar.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button onclick="modalContents(${kabar.idMeal})"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#item-modal">
            Details
</button>
                </div>
              </div>
        


        `;
        MealContainer.appendChild(mealDiv);
        
    });

}




const searchmeal=(searchText)=>{
 const item=document.getElementById('Search-input').value;

 loadMeal(item);
 console.log(item);
 
}


const modalContents=(newContent)=>{
    const newUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=${newContent}`
    fetch(newUrl)
    .then(res=>res.json())
    .then(data=> displaymealModal(data.meals[0]))

    

}




const displaymealModal=kabarMenu2=>{
    console.log(kabarMenu2);
    document.getElementById('mealDetailsModalLabel').innerText=kabarMenu2.strMeal;
    const mealBody=document.getElementById('modal-body');
    mealBody.innerHTML=`
     <img  class="img-fluid"src="${kabarMenu2.strMealThumb}">
     <h5>${kabarMenu2.strCategory}</h5>
     <h5>${kabarMenu2.strTags? kabarMenu2.strTags:'No tag found'}</h5>
     <h5>${kabarMenu2.strArea}
     <h5>${kabarMenu2.strYoutube }
     </h5>
     
     `
}

loadMeal("fish");