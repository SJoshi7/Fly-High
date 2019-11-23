export const switchHelper = () => {
  var source = document.getElementById('source');
  var destination = document.getElementById('destination');
  var temp = source.value;
  source.value = destination.value;
  destination.value = temp;
}
