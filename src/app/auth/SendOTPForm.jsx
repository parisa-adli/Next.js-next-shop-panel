import TextField from "@/common/TextField";

function SendOTPForm({ phoneNumber, onChange }) {
  return (
    <div>
      <form>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
export default SendOTPForm;
