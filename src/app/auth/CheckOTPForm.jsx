import Button from "@/ui/Button";
import OTPInput from "react-otp-input";
import { FaArrowRight } from "react-icons/fa6";

function CheckOTPForm({ onSubmit, otp, setOtp, onBack, time, onResendOtp }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="bg-primary-200 rounded-md p-2 flex items-center justify-center text-primary-900 gap-x-2 mb-4"
      >
        <FaArrowRight />
        <span>برگشت</span>
      </button>
      <div>
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
        )}
      </div>
      <form className="space-y-10 mt-4" onSubmit={onSubmit}>
        <p>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
            outline: "none",
          }}
          containerStyle="flex gap-x-2 justify-center"
          renderInput={(props) => <input {...props} />}
        />
        <Button>تایید</Button>
      </form>
    </div>
  );
}
export default CheckOTPForm;
