const WIDTH = 700;
const HEIGHT = 700;
const NUMBER_POINTS = 50; // # of points that will be on the canvas per container
var dotContainers = [];

function setup()
{
   createCanvas(WIDTH, HEIGHT);
   var foregroundDots = new PointContainer();
   var backgroundDots = new PointContainer();
   dotContainers.push(backgroundDots);
   dotContainers.push(foregroundDots);

   // filling both containers with dots
   for(var i = 0; i < dotContainers.length; i++)
   {
      for(var j = 0; j < NUMBER_POINTS; j++)
      {
         dotContainers[i].container.push(new ConnectionPoint
         (
            Math.round(random(WIDTH)),
            Math.round(random(HEIGHT))
         ));
      }
   }

   // these methods are defined here because outside if draw() and setuo() some functions are not available
   for(var i = 0; i < dotContainers.length; i++)
   {
      dotContainers[i].move = function()
      {
         xoff = 0;
         for(var j = 0; j < NUMBER_POINTS; j++)
         {
            this.container[j].x += map(noise(xoff), 0, 1, -1, 1);
            this.container[j].y += map(noise(xoff + 1000), 0, 1, -1, 1);
            xoff += 0.2;
         }
      }

      dotContainers[i].checkBorders = function()
      {
         for(var j = 0; j < NUMBER_POINTS; j++)
         {
            if(this.container[j].x > WIDTH)
               this.container[j].x = 0;
            if(this.container[j].y > WIDTH)
               this.container[j].y = 0;
            if(this.container[j].x < 0)
               this.container[j].x = WIDTH;
            if(this.container[j].y < 0)
               this.container[j].y = HEIGHT;
         }
      }
   }
} // end setup

function draw()
{
   background(0, 0, 0);
   stroke(24, 24, 24);

   for(var i = 0; i < dotContainers.length; i++)
   {
      dotContainers[i].move();
      dotContainers[i].checkBorders();
      if(i === 1)
         stroke(255, 255, 255); // lighter shade for foreground
      dotContainers[i].display();
   }
}
