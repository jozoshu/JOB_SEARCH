import pgConnect from '../config/postgres';
import errorMessages from '../core/errorMessages';
import ApiException from '../core/exceptions';
errorMessages

const getLastSuccess = (req, res) => {
    const type = req.query.type;
    if (type) {
        const pool = pgConnect();
        pool.query(`
            SELECT  handler_type
                  , last_crawl_date 
            FROM    tb_op_last_crawl_date 
            WHERE   handler_type = '${type.toUpperCase()}'`, 
            (err, result) => {
                if (err) {
                    throw new ApiException(errorMessages.QUERY_ERROR);
                }
                res.status(200).json(result.rows);
            }
        );
    } else {
        throw new ApiException(errorMessages.INVALID_PARAMS);
    }
}

export default getLastSuccess
