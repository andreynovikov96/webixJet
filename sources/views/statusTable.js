import Table from "views/tableBut";
import {statuses} from "models/statuses";

export default class statusData extends Table{
	ready(view){
		view.queryView({view:"datatable"}).parse(statuses);
	}
	add() {
		statuses.add({Name:"New"});
	}
	remove() {
		let id = this.table.getSelectedId();
		if(id) statuses.remove(id);
	}
}