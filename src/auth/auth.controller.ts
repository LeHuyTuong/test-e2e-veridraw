import { Request, Response } from "express";
export class AuthController {
  async register(req: Request, res: Response) { return res.json({ message: "Đăng ký tài khoản thành công" }); }
  async login(req: Request, res: Response) { return res.json({ token: "jwt-token" }); }
  async logout(req: Request, res: Response) { return res.json({ message: "Đăng xuất" }); }
}