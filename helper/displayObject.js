export default function displayObject(obj) {
  let res = [];

  if (typeof obj === "string") return [obj];
  if (obj) {
    Object.keys(obj).map((key) => {
      res.push(`${key} : ${obj[key]}`);
    });
  }

  return res.join(" ");
}
