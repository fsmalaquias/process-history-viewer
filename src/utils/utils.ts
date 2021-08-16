export default class Utils{
  static formatDate(dateString: string){
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = this.padToTwo(date.getMonth()+1);
    const day = this.padToTwo(date.getDate());
    const hour = this.padToTwo(date.getHours());
    const minute = this.padToTwo(date.getMinutes());
    const seconds = this.padToTwo(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
  }

  static padToTwo(number: any) {
    if (parseInt(number, 10)<=99) { number = ("0"+number).slice(-2); }
    return number;
  }
}