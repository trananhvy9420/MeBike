"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../button";
import { Logo as MetroLogo } from "@/components/logo";
import { useRouter } from "next/navigation";
import "./Header.css";
const Header = () => {
  const router = useRouter();
  return (
    <header className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
          ></Button>
          <MetroLogo />
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Button variant="ghost" className="text_header">
              Giới thiệu
            </Button>
          </div>

          <div>
            <Button variant="ghost" className="text_header">
              Hướng dẫn sử dụng
            </Button>
          </div>
          <div>
            <Button variant="ghost" className="text_header">
              Danh sách trạm
            </Button>
          </div>
          <div>
            <Button variant="ghost" className="text_header">
              Bảng giá
            </Button>
          </div>
          <div>
            <Button variant="ghost" className="text_header">
              Dịch vụ
            </Button>
          </div>
          <div>
            <Button variant="ghost" className="text_header">
              Liên hệ
            </Button>
          </div>
          <div>
            <Button
              variant="ghost"
              className="text_header"
              onClick={() => router.push("/auth/login")}
            >
              Đăng nhập
            </Button>
            |
            <Button
              variant="ghost"
              className="text_header"
              onClick={() => router.push("/auth/register")}
            >
              Đăng ký
            </Button>
          </div>
        </div>
        <div>
          <Button
            onClick={() => router.push("/")}
            className="bg-[linear-gradient(135deg,_#2563eb,_#60a5fa)] text-white hover:scale-105 hover:shadow-[var(--shadow-metro)]"
          >
            Bắt đầu sử dụng
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
