import { Injectable } from '@nestjs/common';
import * as Grammarbot from "grammarbot";
@Injectable()
export class GrammarCheckerService {
    async grammerCheck(text: string): Promise<any>{
        const bot = new Grammarbot({
            'api_key': '928f6b0e84mshdbc66172d7b1f1dp110f75jsnf05b70da7616',      // (Optional) defaults to node_default
            'language': 'en-US',         // (Optional) defaults to en-US
            'base_uri': 'api.grammarbot.io', // (Optional) defaults to api.grammarbot.io
        });

        try {
           const results =  await bot.checkAsync(text);
           return results;
        } catch (err) {
            return err;
        }
    }

}


