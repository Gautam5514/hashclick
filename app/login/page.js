import AuthPanel from "../components/shared/AuthPanel";

export const metadata = { title: "Log in" };

export default function LoginPage() {
  return <AuthPanel mode="login" />;
}
