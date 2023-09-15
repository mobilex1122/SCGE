
const app = new PIXI.Application({ width: 640, height: 360 });

// Adding the application's view to the DOM
document.body.appendChild(app.view);

const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
  console.log(keys);
});

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
  console.log(keys);
});
const object = new PIXI.Graphics();
object.beginFill("#ff0000", 1);
object.drawRect(100, 100, 200, 100);
app.stage.addChild(object);

let objects = {};
(async () => {
    let data = await fetch("./game/game.json")
    data = await data.json()


    data.objects.forEach(obj => {
        objects[obj.name] = new PIXI.Graphics();
        objects[obj.name].beginFill(obj.fill, 1);
        objects[obj.name].drawRect(obj.x, obj.y, obj.w, obj.h);
        app.stage.addChild(objects[obj.name]);
    });
})()
app.ticker.add((delta) => {
        
    if (keys['w']) {
        object.x -= 1
    }
    console.log('s');  
})
