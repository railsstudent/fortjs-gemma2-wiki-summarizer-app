import { routes } from "@/routes";
import { Fort } from "fortjs";
import * as path from "path";
import { env } from './configuration';

export const createApp = async () => {
    Fort.folders = [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }];

    Fort.routes = routes;
    Fort.port = env.port;

    await Fort.create();
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort has been forged and is now ready for exploration at ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

