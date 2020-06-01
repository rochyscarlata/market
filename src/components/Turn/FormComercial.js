import React, {useState} from 'react';
import {  useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";


const FormComercial = () => {
    const [dispositivo, setDispositivo] = useState(1);
    const { register, control } = useForm();
    const onChangeDevice = (e) => {
        let typeDevice = e.target.value;
        setDispositivo(parseInt(typeDevice));
      };
    
      const changeDevice = () => {
        if (dispositivo === 1) {
          return (
            <>
              <label>Modelo</label>
              <select name="modelo" ref={register}>
                <option value="1">apple</option>
                <option value="2">hp</option>
                <option value="3">lenovo</option>
              </select>
            </>
          );
        } else if (dispositivo === 2) {
          return (
            <>
              <label>Modelo</label>
              <select name="modelo" ref={register}>
                <option value="1">samsung</option>
                <option value="2">Apple</option>
                <option value="3">Motorola</option>
                <option value="4">Xiaomi</option>
                <option value="5">Nokia</option>
              </select>
            </>
          );
        } else if (dispositivo === 3) {
          return (
            <>
              <label>Modelo</label>
              <select name="modelo" ref={register}>
                <option value="1">samsung</option>
                <option value="2">Apple</option>
                <option value="3">Motorola</option>
              </select>
            </>
          );
        } else if (dispositivo === 4) {
          return (
            <>
              <label>Modelo</label>
              <select name="modelo" ref={register}>
                <option value="1">lenovo</option>
                <option value="2">Apple</option>
                <option value="3">Exo</option>
                <option value="4">dell</option>
                <option value="5">hp</option>
              </select>
            </>
          );
        }
      };
    return ( <>
        <label>¿Que equipo estas buscando?</label>
        <select
          name="dispositivo"
          ref={register}
          onChange={(e) => {
            onChangeDevice(e);
          }}
        >
          <option value="1">pc</option>
          <option value="2">celular</option>
          <option value="3">tablet</option>
          <option value="4">notebok</option>
        </select>
        {changeDevice()}

        {dispositivo === 1 || dispositivo === 4 ? (
          <>
            <label>Descripcion del dispositivo</label>
            <textarea
              name="descripcion"
              ref={register}
              placeholder="ejemplo: procesador , uso del dispositivo ..."
            />
          </>
        ) : null}

        <label>Cantidad de gasto (pesos)</label>
        <input
          type="number"
          name="precio"
          placeholder="ejemplo: 1000"
          ref={register}
        />
        <label>Elegir fecha</label>
        <section className="date">
          <Controller
            as={ReactDatePicker}
            control={control}
            valueName="selected"
            onChange={([selected]) => selected}
            name="fecha"
            placeholderText="Selecciona fecha"
          />
        </section>
        <label>selecciona una hora</label>
        <select name="hora" ref={register}>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
        </select>
      </> );
}
 
export default FormComercial;