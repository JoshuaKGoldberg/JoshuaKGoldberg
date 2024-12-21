export interface Project extends ProjectBase {
	more?: ProjectBase[];
}

export interface ProjectBase {
	description: string;
	image?: string;
	links?: Record<string, string>;
	name?: string;
	owner: string;
	repo: string;
	role?: string;
	stars: number;
	url?: string;
}

export interface ProjectCategory {
	description: string;
	projects: Project[];
}
