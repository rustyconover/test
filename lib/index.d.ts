import * as Config from '@oclif/config';
import { expect, FancyTypes } from 'fancy-test';
import { command } from './command';
import { loadConfig } from './load-config';
export declare const test: FancyTypes.Base<FancyTypes.Context, {
    skip: {
        output: {};
        args: [];
    };
} & {
    only: {
        output: {};
        args: [];
    };
} & {
    retries: {
        output: {};
        args: [number];
    };
} & {
    catch: {
        output: {
            error: Error;
        };
        args: [string | RegExp | ((err: Error) => any), ({
            raiseIfNotThrown?: boolean | undefined;
        } | undefined)?];
    };
} & {
    env: {
        output: {};
        args: [{
            [k: string]: string | null | undefined;
        }, (FancyTypes.EnvOptions | undefined)?];
    };
} & {
    stub: {
        output: {
            stubs: any[];
        };
        args: any[];
    };
} & {
    stdin: {
        output: {};
        args: [string, (number | undefined)?];
    };
} & {
    stderr: {
        output: {
            readonly stderr: string;
        };
        args: [({
            print?: boolean | undefined;
            stripColor?: boolean | undefined;
        } | undefined)?];
    };
} & {
    stdout: {
        output: {
            readonly stdout: string;
        };
        args: [({
            print?: boolean | undefined;
            stripColor?: boolean | undefined;
        } | undefined)?];
    };
} & {
    nock: {
        output: {
            nock: number;
        };
        args: [string, FancyTypes.NockOptions | FancyTypes.NockCallback, (FancyTypes.NockCallback | undefined)?];
    };
} & {
    timeout: {
        output: {
            timeout: number;
        };
        args: [(number | undefined)?];
    };
} & {
    loadConfig: {
        output: {
            config: Config.IConfig;
        };
        args: [(loadConfig.Options | undefined)?];
    };
} & {
    command: {
        output: {
            config: Config.IConfig;
            expectation: string;
        };
        args: [string | string[] | import("./command").commandArgCreator, (loadConfig.Options | undefined)?];
    };
} & {
    exit: {
        output: {
            error: any;
        };
        args: [(number | undefined)?];
    };
} & {
    hook: {
        output: {
            config: Config.IConfig;
            expectation: string;
        };
        args: [string, (object | undefined)?, (loadConfig.Options | undefined)?];
    };
}>;
export default test;
export { expect, FancyTypes, Config, command, };
