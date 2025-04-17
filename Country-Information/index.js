
document.getElementById("button").addEventListener("click", ()=>{
  let input = document.getElementById("input") ;
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then(request => request.json())
    .then(data=>{
      let flag = document.createElement("img")
      flag.setAttribute("src", data[0].flags.png)
      flag.setAttribute("alt", "Country flag")
      flag.setAttribute("class", "flag")
      document.getElementById("countryContainer").prepend(flag) ;

      let court = document.createElement("img")
      court.setAttribute("src", data[0].coatOfArms.png)
      court.setAttribute("alt", "Court of Arms")
      court.setAttribute("class", "Court")
      document.getElementById("countryContainer").prepend(court) ;


     document.getElementById("countryName").textContent = "COUNTRY NAME: "+data[0].altSpellings[1]
     document.getElementById("capitalCity").textContent = "CAPITAL CITY: "+data[0].capital[0]
     document.getElementById("continent").textContent = "CONTINENT: "+data[0].continents[0]
     document.getElementById("population").textContent = "POPULATION: "+data[0].population + " People"
   }).catch(error=>{
     alert("Error has occured!!!, error message: " + error.message)
   })
    input.value = ""
  })

    let year = new Date().getFullYear()
    document.getElementById("year").textContent = year ;
