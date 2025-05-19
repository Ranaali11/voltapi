export default function handler(req, res) {
  // You can return any status info or dummy data here
  res.status(200).json({
    status: "ok",
    scooterId: "123456789012345",
    message: "Scooter is operational"
  });
}
