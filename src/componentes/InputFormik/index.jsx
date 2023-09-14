import { useField } from "formik";

const InputFormik = ({ label, classe = "", size = "lg", ...props }) => {
    const [inputProps, meta] = useField(props);

    const sizeClass =
        size === "lg"
            ? "py-3 px-4 rounded-2xl w-full"
            : size === "sm"
            ? "px-2 py-1 rounded-xl w-[120px]"
            : "";

    return (
        <div>
            {label && (
                <label
                    className="font-titulos font-medium mb-2 text-lg text-violeta-01"
                    htmlFor={`txt${label}`}
                >
                    {label}
                </label>
            )}

            <input
                {...inputProps}
                {...props}
                className={`${classe} ${sizeClass} font-textos text-base border-2 border-violeta-01 text-cinza-06 `}
                id={`txt${label}`}
            />
        </div>
    );
};

export default InputFormik;
