import {JetView} from "webix-jet";
import countrTable from "views/countryTable";
import statusTable from "views/statusTable";

export default class DataView extends JetView{
	config(){
		let multiView = { 
			cols: [
				{
					view:"list",
					width:300,
					scroll:false,
					select:true,
					on: {
						onAfterSelect: function (id) {
							this.$scope.$$(id).show();
						}
					},
					data: [
						{id:"countries", value:"Countries"},
						{id:"statuses",  value:"Statuses"},
					]
				},
				{
					cells:[
						{id:"countries", $subview:countrTable},  
						{id:"statuses", $subview:statusTable}
					]
				}
			]
		};
		return { cols:[multiView]};
	}
} 