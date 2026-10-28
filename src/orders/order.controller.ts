import { Request, Response } from "express";
export class OrderController {
  async createOrder(req: Request, res: Response) { return res.json({ id: "ORD-001", status: "pending" }); }
  async getMyOrders(req: Request, res: Response) { return res.json([{ id: "ORD-001" }]); }
  async cancelOrder(req: Request, res: Response) { return res.json({ status: "cancelled" }); }
}