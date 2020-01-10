
const bryggePoint = turf.point([
    10.733052492141724,
    59.91034126063644
  ]);

const pt = turf.point([-77, 44]);

const bryggePolygon = [
    [
      [
        10.733191967010498,
        59.91066937503102
      ],
      [
        10.732258558273315,
        59.90945910093906
      ],
      [
        10.732505321502686,
        59.90939455174821
      ],
      [
        10.733449459075928,
        59.91060482819322
      ],
      [
        10.733191967010498,
        59.91066937503102
      ]
    ]
  ]

const poly = turf.polygon(bryggePolygon);

const erInni = turf.booleanPointInPolygon(pt, poly);
const paaBrygga = turf.booleanPointInPolygon(bryggePoint, poly);
console.log(erInni);
console.log(paaBrygga);

if(paaBrygga) {
    alert("Du er på brygga");
} else {
    alert("Du er ikke på brygga");
}