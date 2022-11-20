import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    text:string;
}

function App() {
 
    const { register, handleSubmit, setValue, getValues,resetField } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (data) => { 
        console.log(data.text);
    } 

    const changeTextValue = (value: string) => {
    const currentText = getValues("text")

    setValue("text", currentText === "" ? value : `${currentText},${value}`);
    };
    
    const resetTextValue = () => {
    resetField("text");
  };

    return (
        <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "50px" }}>
                <input {...register("text")}  style={{ margin: "20px" }} placeholder='入力してください' />
                
        <input type="submit" />
        <div>
          {["orange", "grape", "banana"].map((value) => {
            return (
              <button
                style={{ margin: "10px" }}
                key={value}
                onClick={() => changeTextValue(value)}
              >
                {value}
                </button>
                
            );
          })}
                    <button
            onClick={resetTextValue}
            style={{ margin: "10px", background: "gray", color: "#fff" }}
          >
            クリア
          </button>
                </div>
      </form>
    </>
  );
}

export default App;
