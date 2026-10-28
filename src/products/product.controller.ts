import { Request, Response } from "express";
export class ProductController {
  async listProducts(req: Request, res: Response) { return res.json([]); }
  async searchProducts(req: Request, res: Response) { return res.json([]); }
  async getProductDetail(req: Request, res: Response) { return res.json({ id: req.params.id }); }
}