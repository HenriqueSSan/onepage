import * as Yup from 'yup';

const YupMessages = {
  required: 'Campo Obrigatorio',
  invalid: 'O Campo está invalido',
};

interface IFieldStringProps {
  min: number;
  max: number;
}

function FieldString({ min, max }: IFieldStringProps) {
  return Yup.string()
    .min(min, 'Muito curto')
    .max(max, 'Muito grande')
    ['required'](YupMessages.required);
}

interface IFieldStringMatchesProps {
  matches: RegExp;
}

function FieldStringMatches({ matches }: IFieldStringMatchesProps) {
  let { invalid, required } = YupMessages;

  return Yup.string().matches(matches, invalid).required(required);
}

let name = FieldString({ min: 4, max: 80 });
let email = Yup.string().email(YupMessages.invalid).required(YupMessages.required);
let telephone = FieldStringMatches({ matches: /\([0-9]{2}\) [0-9]{5}-[0-9]{4}/ });
let message = FieldString({ min: 100, max: 300 });

export default Yup.object().shape({
  name,
  email,
  telephone,
  message,
});
