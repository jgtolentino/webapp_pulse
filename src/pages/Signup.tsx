
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <AuthForm mode="signup" />
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
