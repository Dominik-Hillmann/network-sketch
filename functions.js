var pointContainer = [];

var ConnectionPoint = function(x, y)
{
   this.x = x;
   this.y = y;
}

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
