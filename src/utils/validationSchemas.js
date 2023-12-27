import * as Yup from "yup";

// const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const passwordRules = /^(?=.*[a-zA-Z\d@$!%*?&-]).{8,}$/;
const weightRules = /^\d+(\.\d{1})?$/;

// Длина пароля должна быть не менее 8 символов.
// Пароль может, но не обязан содержать один из специальный символ (например, !, @, #, $, %, -).

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be A-z, 1-9")
    .required("Required"),
});

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const YourGoalSchema = Yup.object().shape({
  goal: Yup.string().required("Choose one of the options"),
});

const SelectGenderSchemas = Yup.object().shape({
  gender: Yup.string().required(),
  age: Yup.number()
    .typeError("Age must be a number")
    .min(8, "Too Young!")
    .max(120, "Too Old!")
    .required("Required"),
});

const BodyParametrsSchema = Yup.object().shape({
  height: Yup.number()
    .typeError("Height must be a number")
    .min(120, "Too Short!")
    .max(220, "Too High!")
    .required("Required"),
  weight: Yup.number()
    .typeError("Weight must be a number")
    .min(4, "Too Light!")
    .max(300, "Too Heavy!")
    .required("Required"),
});

const YourActivitySchema = Yup.object().shape({
  activity: Yup.string().required("Choose one of the options"),
});

const ValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .min(8, "Too Young!")
    .max(120, "Too Old!")
    .required("Required"),
  gender: Yup.string().required(),
  height: Yup.number()
    .typeError("Height must be a number")
    .min(120, "Too Short!")
    .max(220, "Too High!")
    .required("Required"),
  weight: Yup.number()
    .typeError("Weight must be a number")
    .min(4, "Too Light!")
    .max(300, "Too Heavy!")
    .required("Required")
    .test(
      "maxDigitsAfterDecimal",
      "Must have 1 digits after decimal",
      (number) => weightRules.test(number)
    ),
  activity: Yup.string().required("Choose one of the options"),
  newPassword: Yup.string()
    .min(8, "Must be 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be A-z, 1-9")
    .oneOf([Yup.ref("confirmPassword"), null], "Passwords must match"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  ),
});

const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

const WeightParametrsSchema = Yup.object().shape({
  weight: Yup.number()
    .typeError("Weight must be a number")
    .min(4, "Too Light!")
    .max(300, "Too Heavy!")
    .required("Required"),
});

const ModalFoodSchema = Yup.object({
  name: Yup.string().required("Required"),
  carbohydrates: Yup.number().required("Required"),
  protein: Yup.number().required("Required"),
  fat: Yup.number().required("Required"),
  calories: Yup.number().required("Required"),
});

export {
  SignupSchema,
  SigninSchema,
  YourGoalSchema,
  SelectGenderSchemas,
  BodyParametrsSchema,
  YourActivitySchema,
  ValidationSchema,
  ForgotPasswordSchema,
  WeightParametrsSchema,
  ModalFoodSchema,
};
