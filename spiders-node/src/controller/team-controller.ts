import { TeamsService } from "../service/team-service";

export class TeamsController {

    serv = new TeamsService();

teams = this.serv.teams


score = this.serv.score


}