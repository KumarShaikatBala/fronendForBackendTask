import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
export const metadata = {
  title: "Shaikat Tomal Ecommerce",
  description: "Tomal Shaikat is a full-stack web developer who specializes in building (and occasionally designing) exceptional digital experiences.",
};
export default function HomepageLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <AuthProvider>
          <ToastContainer />
       <Header />
          {children}
       <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}