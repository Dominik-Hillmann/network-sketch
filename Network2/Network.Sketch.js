const NUM_POINTS = 50;

var points = [];

var setup = function()
{
   const WIDTH = 500;//windowWidth - 20;
   const HEIGHT = 500;//windowHeight - 20;
   var canvas = createCanvas(WIDTH, HEIGHT);

   // putting NUM_POINTS points into the points array
   for(var i = 0; i < NUM_POINTS; i++)
      points.push(new Point
      (
         WIDTH,  // Math.random() * WIDTH, // x coordinate
         HEIGHT, // Math.random() * HEIGHT // y coordinate
         2,      // min size
         7,      // max size
         40      // max halo size
      ));
}

var draw = function()
{
   background(0, 0, 0);
   fill(255, 255, 255);
   noStroke();

   for(point of points)
      point.render();
   if(frameCount % 10 == 0) console.log
   (
      points[2].haloSize,
      "|",
      points[2].hasHalo1,
      "|",
      points[2].haloAlpha
   );
}

/*
   * TODO:
      * color gradients as background
      * halos changing brightness
*/
