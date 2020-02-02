import * as Config from '@oclif/config';
import { loadConfig } from './load-config';
export declare type commandArgCreator = () => string[] | string;
export declare function command(args: string[] | string | commandArgCreator, opts?: loadConfig.Options): {
    run(ctx: {
        config: Config.IConfig;
        expectation: string;
    }): Promise<void>;
};
