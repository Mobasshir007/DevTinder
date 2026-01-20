const adminAuth = (req, res, next) => {
  console.log("Admin auth is being checked");
  const token="xyz"
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("Not Authorized");
  } else {
    next();
  }
};
module.exports = {
  adminAuth,
};
