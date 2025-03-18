import TextField from "@/common/TextField";

function SendOTPForm({ phoneNumber, onChange, onSubmit }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}
export default SendOTPForm;
