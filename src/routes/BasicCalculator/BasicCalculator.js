import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ButtonBox from "../../components/ButtonBox/ButtonBox";
import Display from "../../components/Display/Display";
import Wrapper from "../../components/Wrapper/Wrapper";

export default function BasicCalculator() {
    const buttonList = [
        ["%", "CE", "C", "⇦"],
        ["1/x", "x²", "√x", "÷"],
        ["7", "8", "9", "×"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["±", "0", ".", "="]
    ];

    const [calculation, setCalculation] = useState({
        sign: "",
        number: 0,
        result: 0
    });

    const clearClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        sign: "",
        number: 0,
        result: 0
        });
    };

    const signInvertClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        number: -calculation.number
        });
    };

    const percentClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        result: (calculation.result /= 100),
        number: !calculation.result
            ? (calculation.number /= 100)
            : calculation.number
        });
    };

    const equalClickHandler = (event) => {
        event.preventDefault();
        const res =
        calculation.sign === "+"
            ? calculation.result + calculation.number
            : calculation.sign === "-"
            ? calculation.result - calculation.number
            : calculation.sign === "×"
            ? calculation.result * calculation.number
            : calculation.sign === "÷"
            ? calculation.result / calculation.number
            : calculation.result;

        setCalculation({
        ...calculation,
        sign: "",
        result:
            !calculation.result && calculation.number ? calculation.number : res,
        number: 0
        });
    };

    const signClickHandler = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        const res =
        calculation.sign === "+"
            ? calculation.result + calculation.number
            : calculation.sign === "-"
            ? calculation.result - calculation.number
            : calculation.sign === "×"
            ? calculation.result * calculation.number
            : calculation.sign === "÷"
            ? calculation.result / calculation.number
            : calculation.result;

        setCalculation({
        ...calculation,
        sign: value,
        result:
            !calculation.result && calculation.number ? calculation.number : res,
        number: 0
        });
    };

    const digitClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        number: calculation.number + "."
        });
    };

    const clearEntryClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        number: 0
        });
    };

    const deleteClickHandler = (event) => {
        event.preventDefault();
        const num = String(calculation.number).slice(0, -1);

        setCalculation({
        ...calculation,
        number: Number(num)
        });
    };

    const invertClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        result: 1 / calculation.result,
        number: !calculation.result ? 1 / calculation.number : calculation.number
        });
    };

    const squareClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        result: Math.pow(calculation.result, 2),
        number: !calculation.result
            ? Math.pow(calculation.number, 2)
            : calculation.number
        });
    };

    const sqrtClickHandler = (event) => {
        event.preventDefault();
        setCalculation({
        ...calculation,
        result: Math.sqrt(calculation.result),
        number: !calculation.result
            ? Math.sqrt(calculation.number)
            : calculation.number
        });
    };

    const numberClickHandler = (event) => {
        event.preventDefault();
        const value = event.target.innerHTML;

        if (String(calculation.number).length < 16) {
        setCalculation({
            ...calculation,
            number:
            calculation.number === 0 && value === "0"
                ? "0"
                : Number(calculation.number + value)
        });
        } else {
        setCalculation({
            ...calculation,
            number: "Error"
        });
        }
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <Wrapper>
                <Display
                    children={calculation.number ? calculation.number : calculation.result}
                />
                <ButtonBox>
                    {buttonList.flat().map((btn) => {
                        return (
                        <Button
                            value={btn}
                            onClick={
                            btn === "C"
                                ? clearClickHandler
                                : btn === "±"
                                ? signInvertClickHandler
                                : btn === "%"
                                ? percentClickHandler
                                : btn === "="
                                ? equalClickHandler
                                : btn === "÷" || btn === "×" || btn === "-" || btn === "+"
                                ? signClickHandler
                                : btn === "."
                                ? digitClickHandler
                                : btn === "CE"
                                ? clearEntryClickHandler
                                : btn === "⇦"
                                ? deleteClickHandler
                                : btn === "1/x"
                                ? invertClickHandler
                                : btn === "x²"
                                ? squareClickHandler
                                : btn === "√x"
                                ? sqrtClickHandler
                                : numberClickHandler
                            }
                        />
                    );
                })}
                </ButtonBox>
            </Wrapper>
        </div>
    );
}