import { Request, Response } from "express";
export class AdminReportController {
  async getRevenueReport(req: Request, res: Response) { return res.json({ totalRevenue: 5000000 }); }
  async exportOrderStatistics(req: Request, res: Response) { return res.json({ totalOrders: 150 }); }
}