import {
    development,
    production,
    siteUrl,
    notAllowedMsg,
    localhost9901,
    localhost9900,
} from './constants';

const env = process.env.NODE_ENV;

const corsOptions = {
    origin: (origin: string, callback) => {
        const whiteList = [localhost9901, localhost9900];
        if (env === development && whiteList.includes(origin)) {
            return callback(null, true);
        }

        if (env === production && origin === siteUrl) {
            return callback(null, true);
        }

        return callback(new Error(notAllowedMsg));
    },
};

export default corsOptions;
