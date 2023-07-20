async function getRoom(req, res) {
  res.render('./room', { roomId: req.params.room });
}

module.exports = { getRoom };
