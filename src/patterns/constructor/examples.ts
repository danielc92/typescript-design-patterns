class Birthday {
  fullName: string;
  date: Date;
  cake: string;

  constructor(fullName: string, date: Date, cake: string) {
    this.fullName = fullName;
    this.date = date;
    this.cake = cake;
  }

  getCandles() {
    const nowYear = new Date().getFullYear();
    const birthdayYear = this.date.getFullYear();
    return nowYear - birthdayYear;
  }
}

export { Birthday };
