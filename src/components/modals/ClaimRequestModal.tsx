import React from "react";
import FXModal from "./FXModal";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { Button } from "@heroui/button";
import { useClaimRequest } from "@/src/hooks/claimRequest.hook";
import { FieldValues } from "react-hook-form";
import { TClaimRequest } from "@/src/types";

const ClaimRequestModal = ({ id, questions }) => {
  const { mutate: claimRequest } = useClaimRequest();

  const onSubmit = (data: FieldValues) => {
    const claimRequestData = {
      item: id,
      description: data?.description,
      answers: Object.keys(data)
        .filter((key) => key.startsWith("answer-"))
        .map((key) => data[key]),
    };
    // console.log(claimRequestData)
    claimRequest(claimRequestData);
  };

  return (
    <FXModal
      variant="faded"
      buttonText="Claim Request"
      modalTitle="Claim Request"
    >
      <h1>Claim you item</h1>
      <FXForm onSubmit={onSubmit}>
        {questions?.map((que, idx) => (
          <div>
            {idx + 1}: {que}
            <FXInput
              label={`Answer of question no. ${idx + 1}`}
              name={`answer-${idx + 1}`}
            ></FXInput>
          </div>
        ))}
        <FXInput label="Description" name="description"></FXInput>
        <Button type="submit">Submit</Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
