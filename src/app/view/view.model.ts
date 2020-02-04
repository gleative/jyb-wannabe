export class View {
  constructor(
    public id: number,
    public name: string,
    public companyName: string,
    public description: string,
    public address: string,
    public imagePath: string,
    public contactInfo: string,
    public buzzWords: string[]
  ) {}
}
