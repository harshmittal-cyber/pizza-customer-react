import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { useDispatch } from "react-redux";
import style from "./StepPhone.module.css";
import { sendotp } from "../../../redux/actions/user";

const StepPhone = ({onNext}) => {
  const [phone, setPhone] = useState("");
  const dispatch=useDispatch();

  const keypress=(e)=> {
    const re = /[0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  const handleSubmit=()=>{
    dispatch(sendotp(phone)).then((res)=>{
        if(res.success){
            onNext();
        }
    })
  }

  return (
    <Card title="Enter your Phone Number">
      <div className={`${style.phone_input}`}>
        <div className={`${style.country_code}`}>
          <input
            type="text"
            placeholder="+91"
            readOnly
            data-label="+91"
            className="bg-white"
          />
        </div>
        <div className={`${style.mobile}`}>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="10"
            onKeyPress={keypress}
          />
        </div>
      </div>
      {phone.length < 10 ? (
        <>
          <input
            type="submit"
            value="SUBMIT"
            disabled
            className="disable_button"
          />
        </>
      ) : (
        <Button text="Submit" onClick={handleSubmit} />
      )}
    </Card>
  )
}

export default StepPhone