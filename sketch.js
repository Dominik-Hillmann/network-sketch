const WIDTH = 700;
const HEIGHT = 700;
const NUMBER_POINTS = 60; // # of points that will be on the canvas

function setup()
{
   createCanvas(WIDTH, HEIGHT);
   // first initialize points at random location on canvas
   for(var i = 0; i < NUMBER_POINTS; i++)
   {
      pointContainer.container.push(new ConnectionPoint
      (
         Math.round(random(WIDTH)),
         Math.round(random(HEIGHT))
      ));
   }
}

function draw()
{
   background(0, 0, 0);
   stroke(255, 255, 255);
   pointContainer.display();
   // changes position of every point with Perlin noise
   var xoff = 0;
   for(var i = 0; i < pointContainer.container.length; i++)
   {
      pointContainer.container[i].x += map(noise(xoff), 0, 1, -1, 1);
      pointContainer.container[i].y += map(noise(xoff + 1000), 0, 1, -1, 1);
      xoff += 0.2;

      if(pointContainer.container[i].x > WIDTH)
      {
         pointContainer.container[i].x = 0;
      }
      if(pointContainer.container[i].y > WIDTH)
      {
         pointContainer.container[i].y = 0;
      }
      if(pointContainer.container[i].x < 0)
      {
         pointContainer.container[i].x = WIDTH;
      }
      if(pointContainer.container[i].y < 0)
      {
         pointContainer.container[i].y = HEIGHT;
      }
   }
}
