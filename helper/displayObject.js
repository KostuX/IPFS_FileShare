export default function displayObject(obj) {
  let keys = [];
  let values = [];
  let res = [];
  if (obj) {
    Object.keys(obj).map((key) => {
      res.push(`${key} : ${obj[key]}`);
    });
  }

  return res.join(" ");
}
