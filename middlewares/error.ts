import { Http2ServerResponse } from "http2"

export const errorHandler = (res: any, code = 500, message = "internal server error") => {
    res.status(code).json({
        success: false,
        message
    })
}