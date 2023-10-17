import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function PageWrapper({ children }) {
  return (
    <main className="relative min-h-screen">
      <div className="flex min-h-screen flex-col justify-between">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
