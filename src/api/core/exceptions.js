class ApiException extends Error {
    constructor(error) {
        super(error[1]);
        this.code = error[0];
        this.status = error[2] || 400
    }
}

export default ApiException;
