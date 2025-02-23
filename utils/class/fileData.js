export default class FileData {
  cid = "";
  ratio = 0;
  totalSize = 0;
  uniqueBlocks = 0;
  ok = false;
  constructor(data) {
    if (data) {
      this.ok = true;
      this.cid = data?.cid;
      this.ratio = data?.data?.Ratio;
      this.totalSize = data?.data?.TotalSize;
      this.uniqueBlocks = data?.data?.UniqueBlocks;
    }
  }
}
