import { DataSet } from './DataSet'

export class AppChartCollection {
  public dataSet: DataSet;
  public id: number = null;
	public name: string;

	constructor(name: string = null, dataSet: DataSet = new DataSet()) {
		this.name = name;
    this.dataSet = dataSet;
	}

	public createCopy() : AppChartCollection {
	  let copy: AppChartCollection = new AppChartCollection();
    copy.dataSet = this.dataSet.createCopy();
    copy.name = this.name;
    return copy;
  }
  public importPropsFromUserDataObject(collection: Object) : void {
    this.dataSet.importPropsFromUserDataObject(collection['dataSet']);
    this.id = collection['id'];
    this.name = collection['name'];
  }
}
