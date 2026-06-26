export default function handler(req, res) {
    // Get status from query parameter or JSON body
    const status =
        Number(req.query.status) ||
        Number(req.body?.status) ||
        200;

    const message =
        req.query.message ||
        req.body?.message ||
        "OK";

    res.status(status).json({
        success: status >= 200 && status < 300,
        status,
        message,
        method: req.method
    });
}