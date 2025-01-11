export default function updateInfo(newInfoData, info, setInfo) {
  let addInfo = {
    data: newInfoData.data,
    title: newInfoData.title,
    time: new Date().toUTCString(),
  };

  setInfo([...info, addInfo]);
}
