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
      this.links = data?.data?.Links ;
      this.totalSize = this.getTotalSize(this.links)
      this.hash = data?.data?.Hash
    }
  }


  getTotalSize(links){
    let total = 0;

    links.forEach(element => {
      total += element.Tsize;
      
    });
console.log(total)
    return total;

  }

  
}
