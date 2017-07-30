var PointContainer = function()
{
   this.container = [];
   this.display = function()
   {
      for(var i = 0; i < this.container.length; i++)
      {
         for(var j = 0; j < this.container.length; j++)
         {
            if(isWithinDistance(this.container[i], this.container[j], 200) && (i != j))
            {
               line
               (
                  this.container[i].x,
                  this.container[i].y,
                  this.container[j].x,
                  this.container[j].y
               );
            }
         }
      }
   }
}

// constructor for a point on the canvas
var ConnectionPoint = function(x, y)
{
   this.x = x;
   this.y = y;
}

// checks whether two points are within the minDistance of each other
var isWithinDistance = function(point1, point2, minDistance)
{
   if(Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)) <= minDistance)
   {
      return true;
   }
   else
   {
      return false;
   }
}
