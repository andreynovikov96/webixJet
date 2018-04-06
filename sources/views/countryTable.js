import Table from "views/tableBut";
import {countries} from "models/countries";

export default class countryData extends Table{
	ready(view){
		view.queryView({view:"datatable"}).parse(countries);
	}
	add() {
		countries.add({Name:"New"});
	}
	remove() {
		let id = this.table.getSelectedId();
		if(id) countries.remove(id);
	}
}