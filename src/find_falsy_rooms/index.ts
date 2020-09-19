const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

type ObjType = Record<string, any>;

const personFalsyRooms = (person: ObjType) => {
  let rooms = person.rooms.flatMap((r: ObjType) => Object.entries(r));
  let falsyRooms = [];
  for (let [room, wasInRoom] of rooms) {
    if (!wasInRoom) {
      falsyRooms.push(room);
    }
  }

  return falsyRooms;
};

const main = (list: Array<any>, suspect: string) => {
  let personMap;
  for (let obj of list) {
    obj["name"] === suspect ? (personMap = obj) : {};
  }

  let wasNotInThoseRooms = personFalsyRooms(personMap);

  return wasNotInThoseRooms;
};

let res = main(newDevelopment, "Professor Plum");
