import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import setingsPage from "../../images/images/setings-page-png.png";
import { TitlePage, ProfileContainer } from "./Settings.styled";
import { useFormik } from "formik";
import RadioButton from "components/RadioButton/RadioButton";
import {ReactComponent as DownloadIcon} from "../../images/svgIcon/download-new-photo.svg";
import { ValidationSchema } from "../../utils/validationSchemas";
import { ShowRules } from "utils/showRules";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../redux/Auth/auth-slice"


const SettingsPage = () => {
  const {userName, userAvatarURL, userAge, userGender, userHeight, userWeight,
    userActivity } = useAuth();
  const dispatch = useDispatch();


  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: userName || '',
      // photo: userAvatarURL || '',
      age: userAge || '',
      gender: userGender || '',
      height: userHeight || '',
      weight: userWeight || '',
      activity: userActivity || '',
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: ValidationSchema,

    onSubmit: (values) => {
      const isNewPasswordEmpty = !values.newPassword.trim();
      const dataToSend = {
        name: values.name,
        age: values.age,
        gender: values.gender,
        height: values.height,
        weight: values.weight,
        activity: values.activity,
      };
    
      if (!isNewPasswordEmpty) {
        dataToSend.newPassword = values.newPassword;
      }
    
      dispatch(updateUserData(dataToSend));
      console.log(dataToSend);
    },
  });


  const handleCancel = () => {
    resetForm();
  };


  const {
    showPassword,
    getInputClass,
    getInputAlert,
    getHidePassword,
  } = ShowRules(values, touched, errors);


  return (
    <Section>
      <Container>
        <TitlePage>Profile setting</TitlePage>
        <ProfileContainer>
          <div className="BannerThumb">
            <img src={setingsPage} alt="setings-page"></img>
          </div>
          <form className="FormFormik" onSubmit={handleSubmit}>
            <label className="Label">
              Your name
              <input
                className={getInputClass("name")}
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("name")}
            </label>
            <div className="FileContainer">
              Your photo
              <input
                className="Input "
                name="photo"
                type="file"
                id="photo"
                accept="image/*"
                onChange={handleChange}
                // value={values.photo}
                onBlur={handleBlur}
              />
              <label className="Label label-for-avatar" htmlFor="photo">
                <div className="Thumb">
                  <img className="AvaImg" src={userAvatarURL} alt="userAvatar" />
                </div>
                <div className="DownloadPhoto">
                  <DownloadIcon className="download-svg"/>
                  Download new photo
                </div>
              </label>
            </div>
            <label className="Label">
              Your age
              <input
                className={getInputClass("age")}
                name="age"
                type="number"
                placeholder="Enter your age"
                onChange={handleChange}
                value={values.age}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("age")}
            </label>
            <div
              className="FormGroup"
              role="group"
              aria-labelledby="gender-head"
            >
              <p className="FormGroupLabel" id="gender-head">
                Gender
              </p>
              <div className="WrapperRadioButton">
                <RadioButton
                  id="Male"
                  text="Male"
                  name="gender"
                  type="radio"
                  value="male"
                  selectedValue={values.gender}
                  onPush={handleChange}
                  onBlure={handleBlur}
                  checked={values.gender === "male"}
                />
                <RadioButton
                  id="Female"
                  text="Female"
                  name="gender"
                  type="radio"
                  value="female"
                  selectedValue={values.gender}
                  onPush={handleChange}
                  onBlure={handleBlur}
                  checked={values.gender === "female"}
                />
              </div>
            </div>
            <label className="Label">
              Height
              <input
                className={getInputClass("height")}
                name="height"
                type="number"
                placeholder="Enter your height"
                onChange={handleChange}
                value={values.height}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("height")}
            </label>
            <label className="Label">
              Weight
              <input
                className={getInputClass("weight")}
                name="weight"
                type="number"
                placeholder="Enter your weight"
                onChange={handleChange}
                value={values.weight}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("weight")}
            </label>
            <label className="Label" id="password">
              New password
              <input
                className={getInputClass("newPassword")}
                name="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.newPassword && getHidePassword()}
              {getInputAlert("newPassword")}
            </label>
            <label className="Label" id="password">
              Confirm password
              <input
                className={getInputClass("confirmPassword")}
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.confirmPassword && getHidePassword()}
              {getInputAlert("confirmPassword")}
            </label>
            <div
              className="FormGroup"
              role="group"
              aria-labelledby="activity-head"
            >
              <p className="FormGroupLabel" id="activity-head">
                Your activity
              </p>
              <RadioButton
                id="1.2"
                text="1.2 - if you do not have physical activity and sedentary work"
                name="activity"
                type="radio"
                value="1.2"
                selectedValue={String(values.activity)}
                onPush={handleChange}
                onBlure={handleBlur}
                checked={values.activity === "1.2"}
              />
              <RadioButton
                id="1.375"
                text="1.375 - if you do short runs or light gymnastics 1-3 times a week"
                name="activity"
                type="radio"
                value="1.375"
                selectedValue={String(values.activity)}
                onPush={handleChange}
                onBlure={handleBlur}
                checked={values.activity === "1.375"}
              />
              <RadioButton
                id="1.55"
                text="1.55 - if you play sports with average loads 3-5 times a week"
                name="activity"
                type="radio"
                value="1.55"
                selectedValue={String(values.activity)}
                onPush={handleChange}
                onBlure={handleBlur}
                checked={values.activity === "1.55"}
              />
              <RadioButton
                id="1.725"
                text="1.725 - if you train fully 6-7 times a week"
                name="activity"
                type="radio"
                value="1.725"
                selectedValue={String(values.activity)}
                onPush={handleChange}
                onBlure={handleBlur}
                checked={values.activity === "1.725"}
              />
              <RadioButton
                id="1.9"
                text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
                name="activity"
                type="radio"
                value="1.9"
                selectedValue={String(values.activity)}
                onPush={handleChange}
                onBlure={handleBlur}
                checked={values.activity === "1.9"}
              />
            </div>
            <div className="ButtonContainer">
              <button
                className="SaveButton"
                type="submit"
                disabled={!values.activity || !isValid}
              >
                Save
              </button>
              <button className="CancelButton" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </ProfileContainer>
      </Container>
    </Section>
  );
};


export default SettingsPage;
