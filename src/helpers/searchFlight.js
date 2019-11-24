import flightData from '../data/flightData.json'

export const searchFlight = () => {
  let newdata = flightData;
  let source = document.getElementById('source').value.toLowerCase();
  let destination = document.getElementById('destination').value.toLowerCase();
  let seats = document.getElementById('seats').value;
  console.log(newdata,source,destination,seats);

  const isAvailable = (item) => {
    // console.log(item);
    // console.log(item.From === source && item.To === destination && item.Seats > seats);
    // console.log(item.From == source);
    return (item.From === source && item.To === destination && item.Seats > seats)
  }
  // console.log(flightData.filter(isAvailable));
  localStorage.removeItem('searchData');
  newdata = flightData.filter(isAvailable);
  localStorage.setItem('searchData',JSON.stringify(newdata));
  // console.log(newdata);
}
