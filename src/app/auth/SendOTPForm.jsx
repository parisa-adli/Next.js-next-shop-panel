import TextField from "@/common/TextField";
import SpinnerMini from "../../ui/SpinnerMini";

function SendOTPForm({ phoneNumber, onChange, onSubmit, isPending }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        {isPending ? (
          <div className="flex justify-center">
            <SpinnerMini />
          </div>
        ) : (
          <button className="btn btn--primary w-full">ارسال کد تایید</button>
        )}
      </form>
    </div>
  );
}
export default SendOTPForm;
