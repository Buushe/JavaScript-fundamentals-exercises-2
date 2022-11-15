// Good Luck! You got this 💪🏾
// Write your code here.
// 5 Write a function called 'describeCountry' which takes three parameters: country,population and capitalCity.
function describecountry(country,population,capitalCity){
    console.log(`${country}has ${population} million people and its captial city is ${capitalCity}`)
}
describecountry("Somaliland",3.5,"Hargeisa")
// 6 Call the function 3 times with input data for 3 different countries. store the return values in 3 different 
//variables and log them to the console.

describecountry("Somalia",10.5,"Mogudisho")
describecountry("Djbouti",1.5,"jbouti")
describecountry("Bangladesh",166,"Dhaka")

// 7 The world population is 7900 million people. Create a function called percentageOfWorld1 which recieves a 
//population value and reutnrs the percentage of the world population that the given population represents.
function percentageOfWorld(population,percentage){
    console.log(`China has ${population} million people, so it's about ${percentage} of the world population`)   
   }
   percentageOfWorld(166,166/7900*100)

//10 // Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, 
//and log them to the console
percentageOfWorld(1393,1393/7900*100)
percentageOfWorld(331.9,331.9/7900*100)
percentageOfWorld(125,125/7900*100)

// 12 Create an array containing 4 population values of 4 countries of your choice and store it in a varaible 
//called population
let population = ["Soomaalilan","SaudiArabia","Malasia","Bangladesh"]
    console.log(population)

// 13 Create an array containing all the neighbouring countries of a country of your choice. 
//Store the array into a varaible called neighbours

let neighbouring = ["Djbouti","Ethiopia","Kenya","Yeman"]
   console.log(neighbouring)
   console.log(neighbouring.length)

// Iteration: for loops
// Console log one by one the countries inside the neighbours array.
    for(i = 0; i<4; i++){
        console.log(neighbouring[i])
    }

// Console log one by one the countries inside the neighbours array but this time in a reverse order.
    for(i = 3; i>=0; i--){
        console.log(neighbouring[i])
    }

//10 Do exercise 8 & 9 using while loop
    let i = 0
    while(i<4){
     console.log(neighbouring[i])
     i++
}

// let i = 3
//     while(i>=0){
//      console.log(neighbouring[i])
//      i--
//     }