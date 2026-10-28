import { Request, Response } from "express";
export class AdminOrderController {
  async approveOrder(req: Request, res: Response) { return res.json({ status: "approved" }); }
  async rejectOrder(req: Request, res: Response) { return res.json({ status: "rejected" }); }
  async assignShipper(req: Request, res: Response) { return res.json({ status: "assigned" }); }
}