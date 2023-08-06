const search = async () => {
  const input = document.getElementById("input").value;
  const respone = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=c79217b4e636c54108ad2beb8eb121ae`
  );
  const data = await respone.json();
  console.log(data);
  const d = `
  <p><b>Name : </b><i>${data.name}</i></p>
  
  <p><b>humidity : </b><i>${data.main.humidity}</i></p>
  
  <p><b>Pressure : </b><i>${data.main.pressure}</i></p>
  
  <p><b>Temperature : </b><i>${data.main.temp}</i></p>
  
  <p><b>Wind : </b><i>${data.wind.speed}</i></p>`;
  const ele = document.querySelector(".data");
  ele.innerHTML = d ? d : "<h1>Loading...</h1>";
};

let input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    search();
  }
});
