export class DataSet {
  public dataPoints: {[label: string] : number};
  public field: string;
  public ticker: string;

  constructor(
    dataPoints: {[label: string] : number} = {},
    field: string = null,
    ticker: string = null
  ) {
    this.dataPoints = dataPoints;
    this.field = field;
    this.ticker = ticker;
  }

  public createCopy() : DataSet {
    let copy : DataSet = new DataSet();
    let originalDataPoints: {[label: string] : number} = this.dataPoints;
    for (let label in originalDataPoints) {
      copy.dataPoints[label] = originalDataPoints[label];
    }
    copy.field = this.field;
    copy.ticker = this.ticker;
    return copy;
  }
  public importPropsFromUserDataObject(dataSet: Object) : void {
    let originalDataPoints: {[label: string] : number} = dataSet['dataPoints'];
    for (let label in originalDataPoints) {
      this.dataPoints[label] = originalDataPoints[label];
    }
    this.field = dataSet['field'];
    this.ticker = dataSet['ticker'];
  }
  public resetProps() : void {

    console.log('called');

    for (let prop in this) {
      if (typeof this[prop] === 'function') {
        continue;
      }
      else {
        this[prop] = null;
      }
    }
    this.dataPoints = {};
  }
}
