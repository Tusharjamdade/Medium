import Quote from "../components/Quote";
import SignupComp from "../components/SignupComp";

export default function Signup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="h-screen">
        <SignupComp />
      </div>
        <Quote />
    </div>
  );
}
