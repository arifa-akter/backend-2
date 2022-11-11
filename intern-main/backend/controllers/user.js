const getUser = (req, res) => {
  res.json({ message: 'hello' });
};
const getMzx =(req, res) =>{
  res.json({message:'hello update getMzx'})
}


module.exports = { getUser, getMzx};
