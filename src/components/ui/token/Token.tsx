import React from "react";
import Modals from "../modals/Modals";
import OtpInput from "react-otp-input";

type IToken = {
  visible: boolean;
  title: string;
  onSubmit: (data: { code: string }) => void;
};

const Token: React.FC<IToken> = ({ visible, title, onSubmit }) => {
  const [otp, setOtp] = React.useState<string>("");

  const onLoad = React.useCallback(() => {
    if (otp.length === 6) {
      onSubmit({ code: otp });
      setOtp("");
    }
  }, [onSubmit, otp]);

  React.useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <Modals visible={visible} title={title}>
      <div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={null}
          shouldAutoFocus={true}
          containerStyle="justify-evenly py-5"
          inputStyle="border-[#00433F] border-[1px] outline-none w-[35px] px-3 text-[18px] py-2 rounded-sm"
          renderInput={({ style, ...props }) => <input {...props} />}
        />
      </div>
    </Modals>
  );
};

export default Token;
