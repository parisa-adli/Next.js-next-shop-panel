import TextField from "@/common/TextField";
import SpinnerMini from "./SpinnerMini";
import Button from "./Button";

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
          <Button>ارسال کد تایید</Button>
        )}
      </form>
    </div>
  );
}
export default SendOTPForm;
