import Quote from "../components/Quote";
import SigninComp from "../components/SigninComp";

export default function Signin() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="h-screen">
        <SigninComp />
      </div>
        <Quote />
    </div>
  );
}
