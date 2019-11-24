import flightData from '../data/flightData.json'

export const searchFlight = () => {
  let newdata = flightData;
  let source = document.getElementById('source').value.toLowerCase();
  let destination = document.getElementById('destination').value.toLowerCase();
  let seats = document.getElementById('seats').value;

  const isAvailable = (item) => {
    return (item.From === source && item.To === destination && item.Seats >= seats)
  }
  localStorage.removeItem('searchData');
  newdata = flightData.filter(isAvailable);
  localStorage.setItem('searchData',JSON.stringify(newdata));

}
