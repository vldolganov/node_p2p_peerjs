const { v4: uuidV4 } = require('uuid');

async function redirectRoom(req, res) {
  res.redirect(`/${uuidV4()}`);
}

module.exports = { redirectRoom };
