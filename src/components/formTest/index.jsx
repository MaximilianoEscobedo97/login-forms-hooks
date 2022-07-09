import React from "react";
import { useForm } from "react-hook-form";
import { AgeValidation } from "../../Validations/AgeValidation";
import { EmailValidate } from "../../Validations/emailValidations";



export function FormTest() {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            name: "Maximiliano"
        }
    });

    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <React.Fragment>
            <h1>Formulario</h1>
            <p>Nombre: {watch("name")}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register("name", {
                        required: true,
                        maxLength: 24,
                        minLength: 3,
                    })} placeholder="Escribe tu nombre" />

                    {errors.name?.type === "required" && <p>El campo nombre es requerido</p>}
                    {errors.name?.type === "maxLength" && <p>El campo nombre debe tener menos de 24 caracteres</p>}
                    {errors.name?.type === "minLength" && <p>El campo nombre debe tener mas de 2 caracteres</p>}
                </div>
                <div>
                    <label>Direccion</label>
                    <input type="text" {...register("address")} placeholder="Escribe tu Direccíon" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" {...register("email", {
                        required: true,
                        validate: EmailValidate
                    })} placeholder="Escribe tu Direccíon de correo electronico" />
                    {errors.email?.type == "required" && <p>Este campo es requerido</p>}
                    {errors.email?.type == "validate" && <p>Este campo tiene que ser un correo valido</p>}
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" {...register("date", {
                        required: true,
                        validate: AgeValidation
                    })} placeholder="Escribe tu edad" />
                    {errors.date?.type === "required" && <p>El campo Edad es requerido</p>}
                    {errors.date?.type === "validate" && <p>El usuario tiene que tener un rango entre 18 y 65 años</p>}
                </div>
                <div>
                    <label>pais</label>
                    <select {...register("location")}>
                        <option value="MX">Mexico</option>
                        <option value="US">Estados Unidos</option>
                        <option value="CN">Canada</option>
                    </select>
                </div>
                <div>
                    <label>Agregar telefono?</label>
                    <input type="checkbox" {...register("add_phone")} />
                </div>
                {watch("add_phone") && <div>
                    <label>telefono</label>
                    <input type="phone" {...register("phone")} />
                </div>}
                <input type="submit" value="Enviar" />
            </form>
        </React.Fragment>
    )
}