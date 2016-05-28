/* global elife */

(function () {
  var myWorld;
  var plan = ['############################',
    '#      #    #      o      ##',
    '#                          #',
    '#          #####           #',
    '##         #   #    ##     #',
    '###           ##     #     #',
    '#           ###      #     #',
    '#   ####                   #',
    '#   ##       o             #',
    '# o  #         o       ### #',
    '#    #                     #',
    '############################'];
  myWorld = new elife.world.World(plan, {
    '#': elife.simpleEcosystem.Wall,
    o: elife.simpleEcosystem.BouncingCritter
  });
  console.log(myWorld.toString());
}());
