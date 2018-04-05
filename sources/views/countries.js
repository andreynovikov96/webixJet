import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class CountriesView extends JetView{
	config(){
		return {
			view:"datatable",
			id:"Countries", 
			autoConfig:true, 
			scrollX:false,
			editable:true

			/* {view:"button", value:"Add"},
        {view:"button", value:"Delete"} */
		};
	}
	init(view){
		view.parse(countries);
	}
}