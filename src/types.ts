import type { Wizard } from "./wizard";

export abstract class Identifiable {
	readonly id: number;

	public constructor(id: number) {
		this.id = id;
	}

	getId(): number {
		return this.id;
	}
}

export type House = "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff";

export type NewWizard = Omit<Wizard, "id" | "getId" | "getHouse">;

export type Spell = {
	id: number;
	name: string;
	category: "attack" | "defense";
	power: number;
};

export type AcademyEvent =
	| { type: "spell-cast"; wizardId: number; spellName: string }
	| { type: "level-up"; wizardId: number; newLevel: number }
	| { type: "wizard-expelled"; wizardId: number };

export type SpellCastEvent = Extract<AcademyEvent, { type: "spell-cast" }>;
