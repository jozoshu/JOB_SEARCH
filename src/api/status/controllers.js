import pgConnect from '../config/postgres';
import { Query } from 'pg';

const lastSuccess = (req, res) => {
    const type = req.query.type;
    if (type) {
        const client = pgConnect();
        const query = new Query(`
            SELECT  handler_type
                , last_crawl_date 
            FROM    tb_op_last_crawl_date 
            WHERE   handler_type = '${type.toUpperCase()}'`
        );
        client.query(query);

        var rows = [];
        query.on('row', row => {
            rows.push(row)
        });
        query.on('end', () => {
            res.send(rows);
            res.status(200).end();
        });
        query.on('error', err => {
            res.send({'data': err.message});
            res.status(400).end();
        });
    } else {
        res.send({'data': 'Yot Must Contain Request Parameters: type'});
        res.status(400).end();
    }
}

export default lastSuccess
