export default function updateInfo({ info, setInfo, newInfo }) {
  let addInfo = {
    data: newInfo.data,
    title: newInfo.title,
    time: new Date().toUTCString(),
  };

  setInfo([...info, addInfo]);
}
