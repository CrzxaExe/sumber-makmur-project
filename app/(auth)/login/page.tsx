import { metadata } from "@/app/layout";
import FormLogin from "@/components/auth/from-login";

const Login = () => {
  metadata.title = "Masuk";

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl text-gray-500 font-bold">Masuk</h1>
      <FormLogin />
    </div>
  );
};

export default Login;
