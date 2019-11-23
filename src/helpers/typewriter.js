var i = 0;
var txt = "Welcome Onboard, Let's Fly Together!";
var speed = 50;
export const typewriter = () => {
  if (i < txt.length) {
    document.getElementById("typedtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
