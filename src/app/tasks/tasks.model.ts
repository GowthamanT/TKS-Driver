export class Tasks {
  public orderId: string;
  public name: string;
  public place: string;

  constructor(orderId:string ,name: string, place: string) {
    this.orderId = orderId;
    this.name = name;
    this.place = place;
  }
}