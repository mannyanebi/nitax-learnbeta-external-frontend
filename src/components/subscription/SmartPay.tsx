import React from "react";
import Input from "../custom/Input";
import { Box, Text, UnstyledButton, Select } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useAppSelector } from "@/store";
import { IDataErrorType, IDataType } from "@/store/@types/payment";

type ISmartPay = {
  handleSubmit: (data: IDataType) => void;
};

export const SmartPay: React.FC<ISmartPay> = ({ handleSubmit }) => {
  const loading = useAppSelector(({ subscription }) => subscription.update);
  const paymentType = useAppSelector(
    ({ subscription }) => subscription.smart_payment_method
  );

  const [data, dataSet] = React.useState<IDataType>({
    mobile_number: "",
    payment_type_id: "",
  });

  const [err, errSet] = React.useState<IDataErrorType>({
    mobile_number: "",
    payment_type_id: "",
  });

  const onSubmit = () => {
    let err: boolean = false;
    if (!data.payment_type_id) {
      errSet((prev) => ({ ...prev, payment_type_id: "error" }));
      err = true;
    }
    if (!data.mobile_number && data.mobile_number.length >= 8) {
      errSet((p) => ({
        ...p,
        mobile_number: "Please enter your mobile number.",
      }));
      err = true;
    }
    if (err) return;
    handleSubmit(data);
  };

  return (
    <Box className="mt-8">
      <Box className="mb-5">
        <Select
          value={data.payment_type_id?.toString()}
          disabled={loading}
          onChange={(val) => {
            if (Number(val))
              dataSet((prev) => ({ ...prev, payment_type_id: Number(val) }));
            errSet((prev) => ({ ...prev, payment_type_id: "" }));
          }}
          searchable
          placeholder="Payment Type"
          data={paymentType.map((type) => ({
            label: type?.name,
            value: type?.id?.toString(),
          }))}
          size="lg"
          styles={() => ({
            input: {
              border: err.payment_type_id
                ? "2px solid red"
                : "2px solid #E2E2E2",
              "&:focus-within": {
                borderColor: err.payment_type_id ? "red" : "#FAA61A",
              },
              borderRadius: "0.125rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              width: "100%",
              fontSize: "15px",
              color: "#292929",
              fontWeight: 500,
              height: "3.7rem",
              "::placeholder": {
                color: "#555555",
                fontWeight: 400,
                fontSize: "15px",
              },
            },
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: "#FAA61A",
                  color: "white",
                },
              },
            },
          })}
          className="placeholder:text-sm mt-2"
        />

        <Box className="mt-[0.2rem]">
          {err.payment_type_id && (
            <label className="text-red-500 text-sm">
              Please Select a payment method
            </label>
          )}
        </Box>
      </Box>

      <Box>
        <Text className="font-semibold text-sm text-[#444444]">
          Phone Number
        </Text>

        <Input
          type="text"
          value={data.mobile_number}
          onChange={({ target }) => {
            dataSet((p) => ({ ...p, mobile_number: target.value }));
            errSet((p) => ({ ...p, mobile_number: "" }));
          }}
          error={err.mobile_number}
          placeholder="Enter Mobile Number"
          disabled={loading}
          className={`w-full ${
            err.mobile_number
              ? "border-red-500 focus:outline-red-500"
              : "border-[#E2E2E2] focus:outline-[#FAA61A]"
          } border-2 px-3 py-5 text-[#555555] transition font-sans duration-75 rounded-lg delay-75 ease-linear placeholder:text-sm placeholder:text-[#555555]`}
        />

        {err.mobile_number && (
          <Text className="font-semibold text-right text-sm text-[#777777] mt-4">
            {err.mobile_number}
          </Text>
        )}
      </Box>

      <Box className="mt-[15%] text-center">
        <UnstyledButton
          onClick={onSubmit}
          disabled={loading}
          className="px-4 w-72 h-14 text-center font-bold transition duration-75 disabled:opacity-50 delay-75 ease-linear hover:bg-[#da9217] rounded-full py-4 bg-[#FAA61A] text-white"
        >
          {loading ? (
            <Icon
              className={`animate-spin mx-auto`}
              icon="icomoon-free:spinner2"
              color="#white"
              width="20"
              height="20"
            />
          ) : (
            "Pay Now"
          )}
        </UnstyledButton>
      </Box>
    </Box>
  );
};

export default SmartPay;
