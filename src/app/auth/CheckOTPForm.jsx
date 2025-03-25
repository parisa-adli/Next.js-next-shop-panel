import Button from "@/ui/Button";
import OTPInput from "react-otp-input";

function CheckOTPForm({ onSubmit, otp, setOtp }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <p>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <Button>تایید</Button>
      </form>
    </div>
  );
}
export default CheckOTPForm;
