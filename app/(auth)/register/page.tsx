import { metadata } from "@/app/layout";
import FormRegister from "@/components/auth/form-register";

const Regsiter = () => {
  metadata.title = "Daftar";
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl text-gray-500 font-bold">Buat akun baru</h1>
      <FormRegister />
    </div>
  );
};

export default Regsiter;
