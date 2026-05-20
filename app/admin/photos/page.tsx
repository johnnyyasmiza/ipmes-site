import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoManager from "@/components/PhotoManager";
import { ipmesImages } from "@/lib/ipmes-images";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

function isPhotoAdminEnabled() {
  return process.env.NODE_ENV !== "production";
}

export default function AdminPhotosPage() {
  if (!isPhotoAdminEnabled()) {
    notFound();
  }

  return <PhotoManager images={ipmesImages} />;
}
