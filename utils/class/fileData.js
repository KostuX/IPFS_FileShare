export default class FileData {
  cid = "";
  ratio = 0;
  totalSize = 0;
  uniqueBlocks = 0;
  ok = false;
  constructor(data) {
    console.log(data?.data)
    if (data) {
      this.ok = true;
      this.cid = data?.cid;
      this.links = data?.data?.Links ;
      this.size = data?.data?.Tsize;
      this.hash = data?.data?.Hash
    }
  }
}
