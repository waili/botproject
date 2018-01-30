var createdRooms;
Promise.all([
  ciscospark.rooms.create({title: 'List Rooms Example 1'}),
  ciscospark.rooms.create({title: 'List Rooms Example 2'}),
  ciscospark.rooms.create({title: 'List Rooms Example 3'})
])
  .then(function(r) {
    createdRooms = r;
    return ciscospark.rooms.list({max: 3})
      .then(function(rooms) {
        var assert = require('assert');
        assert(rooms.length === 3);
        for (var i = 0; i < rooms.items.length; i+= 1) {
          assert(createdRooms.filter(function(room) {
            return room.id === rooms.items[i].id;
          }).length === 1);
        }
        return 'success';
      });
  });

ciscospark.rooms.create({title: 'Create Message Example'})
  .then(function(room) {
    return ciscospark.messages.create({
      text: 'Howdy!',
      roomId: room.id
    });
  })
  .then(function(message) {
    var assert = require('assert');
    assert(message.id);
    assert(message.personId);
    assert(message.personEmail);
    assert(message.roomId);
    assert(message.created);
    return 'success';
  });