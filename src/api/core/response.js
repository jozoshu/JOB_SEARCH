import ApiException from "./exceptions";

/*
:Description
    비즈니스 로직 실행후 성공 실패 여부에 따라 response format을 구분한다.

:Logic
    status 200 : 정상적으로 진행된 경우
    status 400 : 로직 내에서 에러가 발생한 경우
    status 500 : 그 밖의 에러인 경우

:Example
    비즈니스 로직 작성시 반드시 resFormat 함수를 거치도록 구성

    router.get('/example', resFormat(func));
*/
const resFormat = (fn) => async (req, res) => {
    try {
        const result = await fn(req, res);
        res.status(200).json({
            'code': 'S000',
            'data': result
        });
    } catch (error) {
        if (error instanceof ApiException) {
            res.status(error.status || 400).json({
                'code': error.code,
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

export default resFormat;
