   import { getContext } from "@/context/index/indexContext";
   import updateInfo from "./updateInfo";
   export default function addInfoData(newInfoData) {
    const {info, setInfo} = getContext()
    if (typeof newInfoData === "string") {
      newInfoData = { data: newInfoData };
    }
    updateInfo(newInfoData, info, setInfo);
  }