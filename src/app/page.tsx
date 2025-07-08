import { DesktopLayout } from "@/components/layouts/desktop/MainLayout";

export default function Home() {
  return (
    <DesktopLayout>
      <div className="bg-blue-400 h-[3000px] flex flex-col justify-center items-center">
        <h1 className="text-white">Test</h1>
      </div>
    </DesktopLayout>
  );
}
