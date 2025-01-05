import { yassin } from "./devInfo";
import { syncProjectsToFileSystem } from "./syncProjects";

export const fileSystem: FileSystem = {
  home: {
    about: `
${yassin.about}

Programming Languages:
${yassin.code.join(", ")}

Operating Systems:
${yassin.operatingSystems.join(", ")}

Tools Used:
${yassin.toolsUsed.join(", ")}

IDEs:
${yassin.ides.join(", ")}
    `,
    projects: {},
    interests: `
${yassin.interests.join("\n")}
    `,
  },
};

syncProjectsToFileSystem(fileSystem);

export interface FileSystem {
  [key: string]: string | FileSystem;
}
