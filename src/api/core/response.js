import ApiException from "./exceptions";

const sendFormat = (fn) => (req, res) => {
    try {
        fn(req, res);
    } catch (error) {
        if (error instanceof ApiException) {
            res.status(error.status || 400).json({
                'code': error.code  ,
                'error': error.message
            });
        } else {
            res.status(500).json({
                'code': 'F000',
                'error': error.message
            });
        }
    }
};

export default sendFormat;
