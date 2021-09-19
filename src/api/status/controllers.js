import pgClient from '../config/postgres';
import errorMessages from '../core/errorMessages';
import ApiException from '../core/exceptions';
import query from './queries';

export const getLastCrawl = async (req, res) => {
    return new Promise((resolve, reject) => {
        const type = req.query.type;
        const client = pgClient();
        if (type) {
            client.query(
                query.getLastCrawlDateByType, [type.toUpperCase()],
                (err, res) => {
                    if (err) {
                        reject(new ApiException(errorMessages.QUERY_ERROR));
                    } else {
                        resolve(res.rows)
                    }
                }
            );
        } else {
            throw new ApiException(errorMessages.INVALID_PARAMS);
        }
    })
}

export default {getLastCrawl};
