import { TeamsController } from "./controller/team-controller";

export const ctcl: any = async (event, _context) => {
    let teamCont = new TeamsController()
        ;
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: teamCont.teams,
            name: 'ali',
            input: event,
        }, null, 2),
    };
}