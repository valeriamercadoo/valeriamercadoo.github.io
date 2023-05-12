let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Le juego al rockstar en temas de programación y soy mercadologa.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
