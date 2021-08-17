export default class Utils{
  static formatDate(dateString: string){
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = this.padLeftToTwo(date.getMonth()+1);
    const day = this.padLeftToTwo(date.getDate());
    const hour = this.padLeftToTwo(date.getHours());
    const minute = this.padLeftToTwo(date.getMinutes());
    const seconds = this.padLeftToTwo(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
  }

  static padLeftToTwo(number: any) {
    if (parseInt(number, 10)<=99) { number = ("0"+number).slice(-2); }
    return number;
  }
}