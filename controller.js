// req to headers
// render in json
exports.getInfos = (req, res) => {
  const ip = req.headers['x-forwarded-for'].split(',')[0];
  const lang= req.headers['accept-language'].split(',')[0];
  const software = req.headers['user-agent'].split(/[()]/)[1];
  if (!ip.length) { // handle wrong answers
   ip = "error, undefined";
  } else if (!lang.length) {
   lang = "error, undefined"; 
  } else if (!software.length) {
    software = "error, undefined";
  }
  res.json({
    "ip": ip, 
    "lang": lang,
    "software": software
  });
};
