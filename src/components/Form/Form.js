import { useForm } from "react-hook-form";

import "./Form.css";

function Form() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Регистрация</h1>
      <label className="label">
        Имя:
        <input 
        type='text'
        {...register('name', {
          required: 'Поле обязательно к заполнению',
        })}
        className="input"
        />
      </label>
      <div className="errors">{errors?.name && <p>{errors.name.message}</p>}</div>
      <label className="label">
        Фамилия:
        <input 
        type='text'
        {...register('lastname', {
          required: 'Поле обязательно к заполнению',
        })}
        className="input"
        />
      </label>
      <div className="errors">{errors?.lastname && <p>{errors.lastname.message}</p>}</div>
      <label className="label">
        Логин:
        <input 
        type='text'
        {...register('login', {
          required: 'Поле обязательно к заполнению',
          minLength: {
            value: 5,
            message: 'Введите не менее 5 символов',
          }
        })}
        className="input"
        />
      </label>
      <div className="errors">{errors?.login && <p>{errors.login.message}</p>}</div>
      <label className="label">
        Пароль:
        <input 
        type='password'
        {...register('password', {
          required: 'Поле обязательно к заполнению',
          minLength: {
            value: 8,
            message: 'Введите не менее 8 символов',
          }
        })}
        className="input"
        />
      </label>
      <div className="errors">{errors?.password && <p>{errors.password.message}</p>}</div>
      <label className="label">
        Телефон:
        <input 
        type='tel'
        placeholder="Номер телефона"
        {...register('tel', {
          required: 'Поле обязательно к заполнению',
          minLength: {
            value: 11,
            message: 'Введите не менее 11 символов',
          }
        })}
        className="input"
        />
      </label>
      <div className="errors">{errors?.tel && <p>{errors.tel.message}</p>}</div>
      <label className="label">
        Пол:
        <select {...register("gender", { required: true })} className='select'>
        <option value="" selected></option>
        <option value="Mr">Мужской</option>
        <option value="Mrs">Женский</option>
      </select>
      </label>
      <button type='submit' className="button" disabled={!isValid}>Отправить</button>
    </form>
  );
}

export default Form;
