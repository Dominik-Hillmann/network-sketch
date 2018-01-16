var Halo = class
{
   constructor(isUsed, size = 0, alpha = 0)
   {
      this.isUsed = isUsed;
      this.size = size;
      this.alpha = alpha;
   }
}

var Point = class
{
   constructor(width, height, minSize, maxSize, maxHaloSize)
   {
      // random coordinate between 0 and canvas size
      this.x = this.randomBetween(0, width);
      this.y = this.randomBetween(0, height);

      this.size = this.randomBetween(minSize, maxSize, true);

      this.numConnect; // max number of connections to other points

      // half of the points that are bigger than the mean size get a halo
      this.halo1 = new Halo
      (
         (this.size > (minSize + maxSize) / 2) ? (Math.random() < 0.6) : false, // bool used
         this.randomBetween(this.size, maxHaloSize),                            // int size
         this.haloAlpha = this.randomBetween(20, 100, true)                     // int alpha
      );
       this.hasHalo1 = (this.size > (minSize + maxSize) / 2) ? (Math.random() < 0.6) : false;

      if(this.hasHalo1)
      {
         this.haloSize1 = this.randomBetween(this.size, maxHaloSize);
         console.log(this.haloSize1, "HaloSize");
         this.haloAlpha = this.randomBetween(20, 100, true);

         // adding additional smaller halo
         this.haloSize2 = randomBetween(20, this.haloSize1);
         this.
      }
      else // 50% chance of having no halo at all
      {
         this.haloSize1 = 0;
         this.haloAlpha = 0;
      }


   }

   /*public*/ render()
   {
      // first halo gets rendered, then the point
      if(this.hasHalo1)
      {
         fill(255, 255, 255, this.haloAlpha);
         ellipse(this.x, this.y, this.haloSize1);
         fill(255, 255, 255, 255);
      }

      ellipse(this.x, this.y, this.size);
   }

   randomBetween(min, max, int = false)
   {
      var re = (Math.random() * (max - min + 1)) + min;
      return (int ? Math.floor(re) : re);
   }
}
