import ClassRoom from './0-classroom'; // imports class ClassRoom from 0 file

function initializeRooms() { // declares func InitialzeRoom initializes empty array named rooms
  const rooms = []; // array used to store instances of ClassRoom
  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));
  return rooms;
}

export default initializeRooms;
// when the initializeRooms is imported in another file the func will be the default import
