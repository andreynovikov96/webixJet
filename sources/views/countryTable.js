import Table from "views/tableBut";
import countries from "models/countries";

export default class countryData extends Table{
	ready(view){
		view.queryView({view:"datatable"}).parse(countries);
	}
}