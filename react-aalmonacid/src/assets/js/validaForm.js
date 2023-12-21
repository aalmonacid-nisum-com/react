const validator = new JustValidate('#formContacto');

validator
  .addField('#nombre', [
    {
      rule: 'required',
      errorMessage: 'Ingrese Nombre',
    },
    {
      rule: 'minLength',
      errorMessage: 'Ingrese Nombre',
      value: 3,
    },
    {
      rule: 'maxLength',
      errorMessage: 'Nombre no válido',
      value: 100,
    },
  ])
  .addField('#apellido', [
    {
        rule: 'required',
        errorMessage: 'Ingrese Apellido',
      },
      {
        rule: 'minLength',
        errorMessage: 'Ingrese Nombre',
        value: 3,
      },
      {
        rule: 'maxLength',
        errorMessage: 'Apellido no válido',
        value: 100,
      },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Ingrese Email',
    },
    {
      rule: 'email',
      errorMessage: 'Email no válido',
    },
  ])
  .addField('#telefono', [
    {
      rule: 'required',
      errorMessage: 'Ingrese teléfono',
    },
    {
      rule: 'number',
      errorMessage: 'Ingrese sólo números',
    },
    {
        rule: 'minLength',
        errorMessage: 'Ej: 912345678',
        value: 9,
    },
    {
      rule: 'minNumber',
      errorMessage: 'Ej: 912345678',
      value: 9,
    },
  ])
  .addField('#mensaje', [
    {
        rule: 'required',
        errorMessage: 'Ingrese Mensaje',
      },
      {
        rule: 'minLength',
        errorMessage: 'Complete su mensaje',
        value: 3,
      },
      {
        rule: 'maxLength',
        errorMessage: 'Máximo de caracteres = 100',
        value: 100,
      },
  ])
  .onSuccess(() => {
    window.location.href='gracias.html'
  });
  