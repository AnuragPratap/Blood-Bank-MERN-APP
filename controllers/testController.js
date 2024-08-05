const testController = (req, res) => {
  // callback function
  res.status(200).send({
    message: "welcome user",
    success: true,
  });
};

module.exports =  {testController} ;
