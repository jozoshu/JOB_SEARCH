export default {
    getLastCrawlDateByType: `
        SELECT  handler_type
              , last_crawl_date 
        FROM    tb_op_last_crawl_date 
        WHERE   handler_type = $1`
}
