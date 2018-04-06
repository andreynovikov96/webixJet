import {JetView} from "webix-jet";
import countrTable from "views/countryTable";
import statusTable from "views/statusTable";

export default class DataView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let multiView = { 
			cols: [
				{
					view:"list",
					width:300,
					id:"multiView",
					scroll:false,
					select:true,
					on: {
						onAfterSelect: function (id) {
							this.$scope.$$(id).show();
						}
					},
					data: [
						{id:"countries", value:_("Countries")},
						{id:"statuses",  value:_("Statuses")},
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
	init(){
		this.$$("multiView").select("countries");
	}
} 