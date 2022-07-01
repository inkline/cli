import { build } from '@inkline/config';
import { Commands } from '../types';
import { Logger } from '../logger';

export async function generateCSS (options: Commands.Generate.CSS.Options) {
    try {
        await build({
            configFile: options.config
        });

        Logger.success(Commands.Generate.CSS.messages.success);
    } catch (error) {
        Logger.error(Commands.Generate.CSS.messages.error);
        Logger.log(error);
    }
}