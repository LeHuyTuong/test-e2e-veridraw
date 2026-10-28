import { Request, Response } from "express";
export class ProfileController {
  async updateProfile(req: Request, res: Response) { return res.json({ updated: true }); }
  async changePassword(req: Request, res: Response) { return res.json({ changed: true }); }
}