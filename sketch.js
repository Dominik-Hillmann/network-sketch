const WIDTH = 400;
const HEIGHT = 400;
const POINT_SIZE = 5;
const NUMBER_POINTS = 20; // number of start points, use .length later because maybe it should be able to change

function setup()
{
   createCanvas(WIDTH, HEIGHT);
   // first points at random location on canvas
   for(var i = 0; i < NUMBER_POINTS; i++)
   {
      pointContainer.push(new ConnectionPoint
      (
         Math.round(random(WIDTH)),
         Math.round(random(HEIGHT))
      ));
      console.log(pointContainer[i]);
   }
}

function draw()
{
   background(0, 0, 0, 5);
   stroke(255, 255, 255);
   for(var i = 0; i < pointContainer.length; i++)
   {
      for(var j = 0; j < pointContainer.length; j++)
      {
         if(isWithinDistance(pointContainer[i], pointContainer[j], 200) && (i != j))
         {
            line(pointContainer[i].x, pointContainer[i].y, pointContainer[j].x, pointContainer[j].y);
         }
      }
   }

   // changing positions of points with Perlin noise
   var xoff = 0;
   for(var i = 0; i < pointContainer.length; i++)
   {
      pointContainer[i].x += map(noise(xoff), 0, 1, -1, 1);
      pointContainer[i].y += map(noise(xoff + 1000), 0, 1, -1, 1); // number that can be negative; in pixels
      xoff += 0.2; //console.log(xoff);

      if(pointContainer[i].x > (WIDTH + POINT_SIZE))
      {
         pointContainer[i].x = 0;
      }
      if(pointContainer[i].y > (WIDTH + POINT_SIZE))
      {
         pointContainer[i].y = 0;
      }
      if(pointContainer[i].x < (0 - POINT_SIZE))
      {
         pointContainer[i].x = WIDTH;
      }
      if(pointContainer[i].y < (0 - POINT_SIZE))
      {
         pointContainer[i].y = HEIGHT;
      }
   }
}

/* TODO
   Array für die ganzen Punkte machen, mit den Objekten - CHANGED
   Wie sich diese Punkte bewegen sollen (auch Verhalten am Rand!) - CHANGED
   Linien zwischen ihnen zeichnen lassen - CHANGED
   sagen, wann die Linien da sein sollen und wann nicht - CHANGED
   das ganze schön machen (Farbverlauf, Dicke nach Nähe)
   elegantere Lösung für Ränder finden
*/

// PS nicht vergessen, neue Files im HTML file zu erwähnen
