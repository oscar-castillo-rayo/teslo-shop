
export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <main className="bg-gray-500 min-h-screen">
        {children}
      </main>
    </div>
  );
}