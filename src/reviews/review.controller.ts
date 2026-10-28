import { Request, Response } from "express";
export class ReviewController {
  async postReview(req: Request, res: Response) { return res.json({ id: "REV-01" }); }
  async getProductReviews(req: Request, res: Response) { return res.json([]); }
}