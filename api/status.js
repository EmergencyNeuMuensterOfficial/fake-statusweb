export default function handler(req, res) {
  const status = Number(req.query.status || req.body?.status || 200);

  res.status(status).json({
    status,
    method: req.method
  });
}