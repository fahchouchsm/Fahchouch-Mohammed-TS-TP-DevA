import { Identifiable } from "./types";
import { House } from "./types";

export class Wizard extends Identifiable {
	private static wizardCounter = -1;
	public name: string;
	public house: House;
	public level: number;
	public active: boolean;

	public constructor(name = "Wizard", house: House = "Gryffindor", level = 1, active = true) {
		super(Wizard.wizardCounter + 1);
		Wizard.wizardCounter++;
		this.name = name;
		this.house = house;
		this.level = level;
		this.active = active;
	}

	public getHouse(): House {
		return this.house;
	}
}

export type NewWizard = Omit<Wizard, "id" | "getId" | "getHouse">;
 