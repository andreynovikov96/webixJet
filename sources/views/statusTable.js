import Table from "views/tableBut";
import statuses from "models/statuses";

export default class statusData extends Table{
	ready(view){
		view.queryView({view:"datatable"}).parse(statuses);
	}
}